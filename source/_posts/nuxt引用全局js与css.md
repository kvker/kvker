---
layout: note
title: nuxt引用全局js与css
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

这里指的是cdn那种，非static

nuxt.config.js

config.head.link and config.head.script

```js
link: [
  { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
],
script: [
  { src: 'https://cdn.bootcdn.net/ajax/libs/echarts/4.8.0/echarts.min.js' }
]
```
  