import { createCallQueue } from '../renderer/call-queue.mjs'
import assert from 'node:assert/strict'
let clock = 0
const starts = []
const queue = createCallQueue(async (_action, payload) => { starts.push(clock); if (payload.fail) throw Error('expected'); return payload.id }, { now: () => clock, sleep: async ms => { clock += ms } })
const results = await Promise.allSettled(Array.from({length:100}, (_,id) => queue({id,fail:id===30})))
assert.equal(results.filter(r=>r.status==='rejected').length,1)
assert.equal(results[99].value,99)
for(let i=1;i<starts.length;i++) assert(starts[i]-starts[i-1]>=125)
for(const time of starts) assert(starts.filter(t=>t>=time && t<time+1000).length<=8)
console.log('PASS: 100 mixed calls, <=8 starts/s, ordered dispatch, failure does not block queue')
