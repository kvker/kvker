---
layout: note
title: pwa实例
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

* index.html

```html
<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><!-- Add to home screen for Safari on iOS --><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="black"><meta name="apple-mobile-web-app-title" content="GoTop PWA"><link rel="apple-touch-icon" href="images/icons/logo.jpg"><!-- iOS done --><link rel="manifest" href="manifest.json" /><title>Vue PWA 冲顶大会</title>
  <style>
    html,
    body {
      height: 100%;
      margin: 0;
    }
  </style>
  </head>
  <body>
    <div id="app"></div>
    <script>
      if (navigator.serviceWorker != null) {
        navigator.serviceWorker.register('sw.js')
          .then(function() {
            console.log('Service Worker Registered')
          })
      }
    </script>
    <script async src="dist/app.js"></script>
  </body>
</html>
```

* sw.js
```js
var cacheName = 'gotop-01'

var cacheList = [
  "/",
  "index.html",
  "dist/app.js",
]

// Service Worker 注册完成事件，写入缓存
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll(cacheList))
      .then(() => self.skipWaiting())
  )
})

// Service Worker 启动事件，处理更新缓存
self.addEventListener('activate', e => {
  e.waitUntil(
    Promise.all(
      caches.keys().then(keys => keys.map(key => {
        if(key !== cacheName) {
          return caches.delete(key)
        }
      }))
    ).then(() => {
      self.clients.claim()
    })
  )
})

// 请求接口事件，处理相关逻辑
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request)
      .then(res => res || fetch(e.request.url))
  )
})
```
* manifest.json
```json
{
    "name": "GoTop",
    "short_name": "冲顶大会",
    "display": "standalone",
    "orientation": "landscape",
    "start_url": "/",
    "theme_color": "purple",
    "background_color": "purple",
    "icons": [
      {
        "src": "logo_144.jpg",
        "sizes": "256x256",
        "type": "image/jpg"
      },
      {
        "src": "logo_256.jpg",
        "sizes": "256x256",
        "type": "image/jpg"
      }
    ]
  }
```

  