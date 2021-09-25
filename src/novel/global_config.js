window.onerror = function(error) {
  alert(error)
}

AV.init({
  appId: 'lSadMHlLzy9TbcO0TBcf9qgH-gzGzoHsz',
  appKey: 'WuXvtapmyOlkzXPkGGpetRuA',
  serverURLs: 'https://lsadmhll.lc-cn-n1-shared.com',
})

location.$query = {}
location.search.substr(1).split('&').forEach(i => {
  let kv = i.split('=')
  location.$query[kv[0]] = kv[1]
})