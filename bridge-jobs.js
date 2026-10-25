'use strict';
const { randomUUID } = require('node:crypto');
function createBridgeJobs({ ttl = 600000, max = 128, now = Date.now } = {}) {
  const jobs = new Map();
  return {
    start(run) {
      for (const [id, job] of jobs) if (now() - job.at > ttl) jobs.delete(id);
      if (jobs.size >= max) throw Error('Too many pending bridge operations');
      const id = randomUUID();
      const job = { at: now(), state: 'pending' };
      jobs.set(id, job);
      // Return the ticket before opening native dialogs or doing disk work.
      setTimeout(() => {
        Promise.resolve().then(run).then(value => {
          job.state = 'done'; job.value = value ?? null;
        }, error => {
          job.state = 'error'; job.error = String(error?.message || error);
        });
      }, 0);
      return { bridgeJobId: id };
    },
    result(id) {
      const job = jobs.get(id);
      if (!job) throw Error('Bridge operation expired; please try again');
      return { state: job.state, ...(job.state === 'done' ? { value: job.value } : {}), ...(job.state === 'error' ? { error: job.error } : {}) };
    },
  };
}
module.exports = { createBridgeJobs };
