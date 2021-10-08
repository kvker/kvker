const CACHE = 'kvker-1'
const QUEUE_NAME = 'bgSyncQueue'
const offlineFallbackPage = '404.html'

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js')

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
})

self.addEventListener('install', async (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.add(offlineFallbackPage)))
})

self.addEventListener('periodicsync', (event) => {})

if (workbox.navigationPreload.isSupported()) {
  workbox.navigationPreload.enable()
}

const bgSyncPlugin = new workbox.backgroundSync.BackgroundSyncPlugin(QUEUE_NAME, {
  maxRetentionTime: 24 * 60, // Retry for max of 24 Hours (specified in minutes)
})

workbox.routing.registerRoute(
  new RegExp('/*'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: CACHE,
    plugins: [bgSyncPlugin],
  })
)

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
