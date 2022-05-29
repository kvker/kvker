---
layout: note
title: uniapp适配PC浏览器
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
document.addEventListener('DOMContentLoaded', function() {
        window.innerWidth = Math.min(window.innerWidth, 750)
        document.documentElement.style.fontSize = window.innerWidth / 20 + 'px'
    })
```
  