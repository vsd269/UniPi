// One budget for uploads, event polling and layer control. Never retry writes.
export function createCallQueue(dispatch, { interval = 170, now = Date.now, sleep = ms => new Promise(resolve => setTimeout(resolve, ms)) } = {}) {
  let tail = Promise.resolve()
  let last = -Infinity
  return payload => {
    const result = tail.then(async () => {
      const delay = interval - (now() - last)
      if (delay > 0) await sleep(delay)
      last = now()
      return dispatch('plugin.call', payload)
    })
    tail = result.catch(() => {})
    return result
  }
}
