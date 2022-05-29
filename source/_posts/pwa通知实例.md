---
layout: note
title: pwa通知实例
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

* index.html

```

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>PWA Notification</title>
</head>

<body>
    <p>  PWA Notification  </p>
    <script src="main.js"></script>
</body>

</html>
```

* sw.js

```

var cacheName = 'noti-01'

var cacheList = [
  "index.html",
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
        if (key !== cacheName) {
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

// 监听通知推送
self.addEventListener('push', function(event) {
  console.log('[Service Worker] Push Received.');
  console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

  const title = 'Push Codelab';
  const options = {
    body: 'Yay it works.',
    icon: 'images/icon.png',
    badge: 'images/badge.png'
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

// 监听点击通知
self.addEventListener('notificationclick', function(event) {
  console.log('[Service Worker] Notification click Received.');

  event.notification.close();

  event.waitUntil(
    clients.openWindow('https://developers.google.com/web/')
  );
});
```

* main.js

```

const applicationServerPublicKey = 'BNoX8sIKuPI7lTwtuMTAWza1-VGqBRiwCYs4G21L_z4HUs3K2EOgywY9N1mQasfwurbzgPpo7Nt9Pg_PGzmriy4'

// 转码，源自 Google 源码
function urlB64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

if (navigator.serviceWorker && PushManager) {
  navigator.serviceWorker.register('sw.js')
    .then(function (swReg) {
      console.log('Service Worker Registered');
      window.swRegistration = swReg
      initialUI()
    });
}

// 用户订阅通知检测
function initialUI() {
  swRegistration.pushManager.getSubscription()
    .then(subscription => {
      if (subscription) console.log('订阅')
      else console.log('未订阅')
    })
    .then(() => {
      subscribeUser()
    })
}

// 用户订阅通知
function subscribeUser() {
  const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
  swRegistration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: applicationServerKey
  })
    .then(function (subscription) {
      console.log('User is subscribed:', subscription);
    })
    .catch(function (err) {
      console.log('Failed to subscribe the user: ', err);
    });
}

// 取消用户订阅，如果需要
function unsubscribeUser() {
  swRegistration.pushManager.getSubscription()
  .then(function(subscription) {
    if (subscription) {
      return subscription.unsubscribe();
    }
  })
  .catch(function(error) {
    console.log('Error unsubscribing', error);
  })
  .then(function() {
    console.log('User is unsubscribed.');
  });
}
```

  