importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js')

let CACHE = 'kvker-01' // 决定是否更新本地资源，每次要更新记得替换

let cacheList = [
  // 需要保存本地资源列表，支持*匹配
  '/',
  '/index.html',
]

const offlineFallbackPage = '404.html'

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
})

self.addEventListener('install', async (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.add(offlineFallbackPage)))
})

if (workbox.navigationPreload.isSupported()) {
  workbox.navigationPreload.enable()
}

self.addEventListener('fetch', (event) => {
  if (event.request.url.match('lcapi')) return
  if (event.request.mode === 'navigate') {
    event.respondWith(
      (async () => {
        try {
          const preloadResp = await event.preloadResponse

          if (preloadResp) {
            return preloadResp
          }

          const networkResp = await fetch(event.request)
          return networkResp
        } catch (error) {
          const cache = await caches.open(CACHE)
          const cachedResp = await cache.match(offlineFallbackPage)
          return cachedResp
        }
      })()
    )
  }
})

// Service Worker 启动事件，处理更新缓存
self.addEventListener('activate', (e) => {
  e.waitUntil(
    Promise.all(
      caches.keys().then((keys) =>
        keys.map((key) => {
          if (key !== CACHE) {
            return caches.delete(key)
          }
        })
      )
    ).then(() => {
      self.clients.claim()
    })
  )
})