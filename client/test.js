console.log('page load', performance.now()/1000)
setTimeout(async () => {
  console.log('fetching js file', performance.now()/1000)
  await import('/imports/test')
  console.log('finished running fetched script', performance.now()/1000)
}, 5 * 1000)
