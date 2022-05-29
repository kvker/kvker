---
layout: note
title: 判断当前网页是否运行在独立PWA模式中
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
const  is_pwa = (window.matchMedia('(display-mode: standalone)').matches) || (window.navigator.standalone) || document.referrer.includes('android-app://')
const is_standalone = is_pwa

console.log({ is_pwa, is_standalone, })
```
  