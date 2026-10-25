const assert=require('node:assert/strict');
const {createBridgeJobs}=require('../bridge-jobs');
(async()=>{
 const jobs=createBridgeJobs();let resolve;const slow=new Promise(r=>resolve=r);const started=Date.now();const ticket=jobs.start(()=>slow);
 assert(Date.now()-started<100);assert.equal(jobs.result(ticket.bridgeJobId).state,'pending');
 await new Promise(r=>setTimeout(r,2100));assert.equal(jobs.result(ticket.bridgeJobId).state,'pending');resolve('folder-selected');await new Promise(r=>setTimeout(r,10));assert.equal(jobs.result(ticket.bridgeJobId).value,'folder-selected');
 const fail=jobs.start(()=>{throw Error('picker cancelled')});await new Promise(r=>setTimeout(r,10));assert.equal(jobs.result(fail.bridgeJobId).error,'picker cancelled');
 console.log('PASS: immediate ticket, operation lasting >2s, result and error delivery');
})().catch(e=>{console.error(e);process.exitCode=1});
