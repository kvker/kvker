---
layout: note
title: body去滚轮油猴
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
(() => {
  const style = document.createElement('style')
  style.innerHTML = 'body::-webkit-scrollbar{display: none;}'
  document.head.append(style)
})()
```
  