const assert=require('node:assert/strict');
const fs=require('node:fs/promises');
const path=require('node:path');
const os=require('node:os');
const images=require('../native-images');
(async()=>{
 const root=await fs.mkdtemp(path.join(os.tmpdir(),'unipi-images-'));
 const data=path.join(root,'plugins','data','local.unipi');await fs.mkdir(data,{recursive:true});
 const bytes=Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+jRZkAAAAASUVORK5CYII=','base64');
 const begin=await images.upload(data,{action:'begin',name:'test.png',mimeType:'image/png',size:bytes.length});
 await images.upload(data,{action:'chunk',id:begin.id,offset:0,chunk:bytes.toString('base64')});
 await images.upload(data,{action:'finish',id:begin.id});
 const files=images.files([begin.id]);assert.deepEqual(await fs.readFile(files[0].path),bytes);
 const operations=[];let request;let preview='';
 const pi={desktop:{invoke:async({operation,args})=>{operations.push(operation);if(operation==='session/create')return {session:{id:'test-session',supportsVision:true}};if(operation==='agent/prompt'){request=args[0];assert.deepEqual(await fs.readFile(request.attachments[0].path),bytes);return {accepted:true,turnId:'turn-1'}};if(operation==='agent/getStatus')return {status:{isRunning:false}};if(operation==='session/get')return {session:{messages:[{role:'assistant',content:[{type:'text',text:'image received'}]}]}};return {}}}};
 const result=await images.complete({pi,dataDir:data,live:{session:{}},modelKey:'provider/model',text:'describe',attachments:files,history:'earlier context',active:()=>true,update:text=>preview=text});
 assert.equal(result.text,'image received');assert.equal(preview,result.text);assert.equal(request.attachments[0].kind,'image');assert.equal(request.attachments[0].mimeType,'image/png');assert(request.content.includes('earlier context'));
 await assert.rejects(images.upload(data,{action:'begin',name:'big.png',mimeType:'image/png',size:11*1024*1024}));
 let active=true;const live={session:{}};const cancelPi={desktop:{invoke:async({operation})=>{if(operation==='session/create')return {session:{id:'cancel-session'}};if(operation==='agent/prompt'){active=false;return {accepted:true,turnId:'cancel-turn'}};operations.push(operation);return {}}}};
 await images.complete({pi:cancelPi,dataDir:data,live,modelKey:'p/m',text:'x',attachments:files,history:'',active:()=>active,update:()=>{}});assert(operations.includes('agent/abort'));assert.equal(live.nativeRun,undefined);
 for (const sample of [{name:'notes.txt',mimeType:'text/plain',bytes:Buffer.from('文件内容不是输入框文字')},{name:'report.pdf',mimeType:'application/octet-stream',bytes:Buffer.from('%PDF-1.7 binary fixture')},{name:'empty.txt',mimeType:'text/plain',bytes:Buffer.alloc(0)}]) {
   const upload=await images.upload(data,{action:'begin',name:sample.name,mimeType:sample.mimeType,size:sample.bytes.length});
   if(sample.bytes.length) await images.upload(data,{action:'chunk',id:upload.id,offset:0,chunk:sample.bytes.toString('base64')});
   const done=await images.upload(data,{action:'finish',id:upload.id});
   assert.equal(done.kind,sample.mimeType==='text/plain'?'text':'file');
   const selected=images.files([upload.id]);
   assert.deepEqual(await fs.readFile(selected[0].path),sample.bytes);
   const staged=await images.stage(data,'file-session',selected);
   assert.equal(staged[0].kind,'file');assert.equal(path.extname(staged[0].path),path.extname(sample.name));
   assert.deepEqual(await fs.readFile(staged[0].path),sample.bytes);
   images.consume([upload.id]);await assert.rejects(async()=>images.files([upload.id]));
 }
 const invalid=await images.upload(data,{action:'begin',name:'bad.txt',mimeType:'text/plain',size:1});
 await images.upload(data,{action:'chunk',id:invalid.id,offset:0,chunk:'/w=='});
 await assert.rejects(images.upload(data,{action:'finish',id:invalid.id}));
 console.log('PASS: images, text/binary/empty files, byte preservation, native extensions, consume, invalid UTF8, cancellation');
})().catch(e=>{console.error(e);process.exitCode=1});
