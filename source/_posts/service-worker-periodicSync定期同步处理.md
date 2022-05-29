---
layout: note
title: service-worker-periodicSync定期同步处理
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
// main.js
const registration = await navigator.serviceWorker.ready
if ('periodicSync' in registration) {
  const tags = await registration.periodicSync.getTags()
  // Only update content if sync isn't set up.
  if (!tags.includes('content-sync')) {
    updateContentOnPageLoad()
  }
} else {
  // If periodic background sync isn't supported, always update.
  updateContentOnPageLoad()
}

// sw.js
async function updateArticles() {
  const articlesCache = await caches.open('articles');
  await articlesCache.add('/api/articles');
}

self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'update-articles') {
    event.waitUntil(updateArticles())
  }
})
```
  