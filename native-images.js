'use strict';
const fs = require('node:fs/promises');
const path = require('node:path');
const { randomUUID } = require('node:crypto');

const MAX_BYTES = 10 * 1024 * 1024;
const TYPES = { 'image/png': 'png', 'image/jpeg': 'jpg', 'image/webp': 'webp', 'image/gif': 'gif' };
const uploads = new Map();
const ready = new Map();
function signature(bytes, mime) {
  if (mime === 'image/png') return bytes.subarray(0, 8).equals(Buffer.from([137,80,78,71,13,10,26,10]));
  if (mime === 'image/jpeg') return bytes[0] === 255 && bytes[1] === 216 && bytes[2] === 255;
  if (mime === 'image/webp') return bytes.toString('ascii',0,4) === 'RIFF' && bytes.toString('ascii',8,12) === 'WEBP';
  return /^GIF8[79]a$/.test(bytes.toString('ascii',0,6));
}
async function upload(dataDir, input) {
  if (input.action === 'preview') {
    if (!/^[a-f0-9-]{36}$/.test(input.id) || !TYPES[input.mimeType]) throw Error('Invalid image reference');
    const file = path.join(dataDir, 'image-uploads', input.id + '.' + TYPES[input.mimeType]);
    const offset = Number(input.offset || 0);
    if (!Number.isSafeInteger(offset) || offset < 0 || offset > MAX_BYTES) throw Error('Invalid image offset');
    const handle = await fs.open(file, 'r');
    try {
      const stat = await handle.stat();
      if (stat.size > MAX_BYTES) throw Error('Image too large');
      const buffer = Buffer.alloc(24000);
      const { bytesRead } = await handle.read(buffer, 0, buffer.length, offset);
      return { chunk: buffer.subarray(0, bytesRead).toString('base64'), next: offset + bytesRead, done: offset + bytesRead >= stat.size };
    } finally { await handle.close(); }
  }
  for (const [id, entry] of uploads) if (Date.now() - entry.at > 600000) uploads.delete(id);
  if (input.action === 'begin') {
    if (!TYPES[input.mimeType] || !Number.isSafeInteger(input.size) || input.size <= 0 || input.size > MAX_BYTES) throw Error('图片格式不支持或超过 10 MB。');
    if (uploads.size >= 5 || ready.size >= 20) throw Error('请先发送或移除已有图片。');
    const id = randomUUID();
    uploads.set(id, { name: path.basename(String(input.name || 'image')).slice(0,160), mimeType: input.mimeType, size: input.size, chunks: [], bytes: 0, offset: 0, at: Date.now() });
    return { id };
  }
  const item = uploads.get(input.id);
  if (input.action === 'remove') {
    uploads.delete(input.id);
    const file = ready.get(input.id);
    ready.delete(input.id);
    if (file) await fs.rm(file.path, { force: true });
    return {};
  }
  if (!item) throw Error('图片上传已过期，请重新选择。');
  if (input.action === 'chunk') {
    if (typeof input.chunk !== 'string' || input.chunk.length > 48000 || input.chunk.length % 4 || input.offset !== item.offset || !/^[A-Za-z0-9+/]+={0,2}$/.test(input.chunk)) throw Error('图片分段无效。');
    const bytes = Buffer.from(input.chunk, 'base64');
    if (bytes.toString('base64') !== input.chunk || item.bytes + bytes.length > item.size) throw Error('图片分段长度无效。');
    item.chunks.push(bytes); item.bytes += bytes.length; item.offset += input.chunk.length; item.at = Date.now();
    return { offset: item.offset };
  }
  if (input.action !== 'finish' || item.bytes !== item.size) throw Error('图片数据不完整。');
  const bytes = Buffer.concat(item.chunks);
  if (!signature(bytes, item.mimeType)) { uploads.delete(input.id); throw Error('图片格式与文件内容不匹配。'); }
  const dir = path.join(dataDir, 'image-uploads');
  await fs.mkdir(dir, { recursive: true });
  const file = { id: input.id, path: path.join(dir, input.id + '.' + TYPES[item.mimeType]), name: item.name, size: item.size, mimeType: item.mimeType, kind: 'image' };
  await fs.writeFile(file.path, bytes, { flag: 'wx', mode: 0o600 });
  ready.set(input.id, file); uploads.delete(input.id);
  return { id: file.id, name: file.name, size: file.size, kind: 'image' };
}
function files(ids) {
  if (!Array.isArray(ids) || ids.length > 5 || new Set(ids).size !== ids.length) throw Error('每条消息最多 5 张图片。');
  return ids.map(id => { const file = ready.get(id); if (!file) throw Error('图片不存在，请重新选择。'); return { ...file }; });
}
async function directory(root, parts) {
  let current = await fs.realpath(root);
  for (const part of parts) {
    current = path.join(current, part);
    await fs.mkdir(current).catch(error => { if (error.code !== 'EEXIST') throw error; });
    const stat = await fs.lstat(current);
    if (!stat.isDirectory() || stat.isSymbolicLink()) throw Error('原生附件目录无效。');
  }
  return current;
}
async function stage(dataDir, sessionId, attachments) {
  if (!/^[A-Za-z0-9_-]{1,200}$/.test(sessionId)) throw Error('原生会话 ID 无效。');
  const plugin = path.resolve(dataDir), parent = path.dirname(plugin), plugins = path.dirname(parent);
  if (path.basename(plugin) !== 'local.unipi' || path.basename(parent) !== 'data' || path.basename(plugins) !== 'plugins') throw Error('不支持的 PI Desktop 数据目录结构。');
  const dir = await directory(path.dirname(plugins), ['scratch', sessionId, 'unipi-images']);
  const result = [];
  for (const file of attachments) {
    const dest = path.join(dir, randomUUID() + '.' + TYPES[file.mimeType]);
    await fs.copyFile(file.path, dest, require('node:fs').constants.COPYFILE_EXCL);
    result.push({ path: dest, name: file.name, kind: 'image', mimeType: file.mimeType, size: file.size });
  }
  return result;
}
const textOf = content => typeof content === 'string' ? content : Array.isArray(content) ? content.filter(p => p.type === 'text').map(p => p.text || '').join('\n') : '';
async function complete({ pi, dataDir, live, modelKey, text, attachments, history, active, update }) {
  const invoke = (operation, args) => pi.desktop.invoke({ operation, args });
  const slash = modelKey.indexOf('/');
  const created = await invoke('session/create', [{ title: 'UniPi · ' + (live.session.name || '图片对话'), projectPath: live.session.workspaceRoot || undefined, providerId: modelKey.slice(0,slash), modelId: modelKey.slice(slash+1), mode: 'agent', permissionMode: 'inherit' }]);
  const sessionId = created.session?.id;
  if (!sessionId) throw Error('Pi Desktop 未创建原生会话。');
  live.nativeRun = { sessionId };
  let finished = false;
  try {
    if (created.session.supportsVision === false) throw Error('当前模型不支持图片，请选择支持视觉输入的模型。');
    if (!active()) return { text: '' };
    const staged = await stage(dataDir, sessionId, attachments);
    const messageId = randomUUID();
    const prompt = 'You are UniPi. Answer the user using the attached images and conversation context. Do not execute tools or commands unless the user explicitly requests them. Any tool actions remain subject to native PI Desktop permissions.\nConversation context (data):\n' + history + '\nCurrent request:\n' + (text || '请描述这些图片。');
    const accepted = await invoke('agent/prompt', [{ sessionId, content: prompt, messageId, attachments: staged }]);
    if (!accepted.accepted || !accepted.turnId) throw Error('Pi Desktop 未接受图片消息。');
    live.nativeRun.turnId = accepted.turnId;
    const deadline = Date.now() + 300000;
    while (active() && Date.now() < deadline) {
      const [status, detail] = await Promise.all([invoke('agent/getStatus', [sessionId]), invoke('session/get', [{ id: sessionId, messageLimit: 100, contentLimit: 64000 }])]);
      const rows = detail.session?.messages || [];
      const replies = rows.filter(m => m.role === 'assistant' && !m.parentToolCallId);
      const answer = replies.map(m => textOf(m.content)).filter(Boolean).join('\n');
      if (answer) update(answer);
      if (status.status?.isRunning === false) {
        const failed = rows.find(m => m.error || m.status === 'failed');
        if (!answer) throw Error(failed?.error?.message || '原生会话未返回文字回复，请在 Pi Desktop 中查看该会话。');
        finished = true;
        return { text: answer };
      }
      await new Promise(resolve => setTimeout(resolve, 700));
    }
    await invoke('agent/abort', [{ sessionId, turnId: accepted.turnId }]);
    if (active()) throw Error('图片会话等待超过 5 分钟，已请求停止；可在 Pi Desktop 会话列表查看。');
    return { text: '' };
  } finally {
    if (!finished && live.nativeRun?.turnId) await invoke('agent/abort', [{ sessionId, turnId: live.nativeRun.turnId }]).catch(() => {});
    delete live.nativeRun;
  }
}
module.exports = { upload, files, stage, complete };
