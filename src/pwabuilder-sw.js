const CACHE = 'kvker-9'
const QUEUE_NAME = 'bg_sync_queue'
const OFFLINE_FALLBACK_PAGE = '404.html'

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js')

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
})

self.addEventListener('install', async (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.add(OFFLINE_FALLBACK_PAGE)))
})

self.addEventListener('periodicsync', (event) => {})

if (workbox.navigationPreload.isSupported()) {
  workbox.navigationPreload.enable()
}

const bg_sync_plugin = new workbox.backgroundSync.BackgroundSyncPlugin(QUEUE_NAME, {
  maxRetentionTime: 24 * 60,
})

workbox.routing.registerRoute(
  new RegExp('/*'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: CACHE,
    plugins: [bg_sync_plugin],
  })
)

self.addEventListener('fetch', (event) => {
  // lc的接口不做缓存
  if (event.request.url.match('lcapi')) return
  if (event.request.mode === 'navigate') {
    event.respondWith(
      (async () => {
        try {
          const p_res = await event.preloadResponse

          if (p_res) {
            return p_res
          }

          const network_res = await fetch(event.request)
          return network_res
        } catch (error) {
          const cache = await caches.open(CACHE)
          const cache_res = await cache.match(OFFLINE_FALLBACK_PAGE)
          return cache_res
        }
      })()
    )
  }
})
