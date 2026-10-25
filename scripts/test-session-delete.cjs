const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const path = require('node:path');
const os = require('node:os');
const vm = require('node:vm');
const { createRequire } = require('node:module');
(async () => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'unipi-delete-'));
  const filename = path.resolve(__dirname, '../main.js');
  let failWrites = false;
  const realRequire = createRequire(filename);
  const sandbox = { module: { exports: {} }, console, setTimeout, clearTimeout, Buffer, process,
    require: name => name === 'node:fs/promises' ? { ...fs, writeFile: (...args) => failWrites ? Promise.reject(Error('disk unavailable')) : fs.writeFile(...args) } : realRequire(name),
    pi: { commands: { register: async () => {}, unregister: async () => {} }, plugin: { getDataPath: async () => dir, getSettings: async () => ({}) }, models: { list: async () => [] } } };
  vm.runInNewContext(await fs.readFile(filename, 'utf8') + String.fromCharCode(10) + 'module.exports.testState = { sessions, getPrefs: () => prefs };', sandbox, { filename });
  const app = sandbox.module.exports;
  await app.onLoad();
  const { sessions } = app.testState;
  const add = (id, status = 'idle') => sessions.set(id, { session: { sessionId: id, status }, items: [{ text: id }], queue: [] });
  const remove = ids => app.onPanelInvoke('muse.delete-sessions', { args: [ids] });
  add('one'); add('two'); add('three'); add('running', 'running');
  app.testState.getPrefs().pinnedSessionIds = ['one', 'three'];
  await assert.rejects(remove(['one', 'running']), /停止/);
  assert(sessions.has('one'));
  await remove(['one']); assert(!sessions.has('one'));
  assert(!app.testState.getPrefs().pinnedSessionIds.includes('one'));
  failWrites = true; await assert.rejects(remove(['two']), /disk unavailable/);
  assert(sessions.has('two')); failWrites = false;
  await remove(['two', 'three', 'three']);
  const saved = JSON.parse(await fs.readFile(path.join(dir, 'sessions.json'), 'utf8'));
  assert.deepEqual(saved.sessions.map(s => s.sessionId), ['running']);
  assert.deepEqual(Object.keys(saved.items), ['running']);
  await assert.rejects(remove([]));
  console.log('PASS: single and batch deletion, running-session atomic rejection, disk failure rollback, durable transcript removal, preference cleanup');
  await fs.rm(dir, { recursive: true, force: true });
})().catch(error => { console.error(error); process.exitCode = 1; });
