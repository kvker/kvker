---
layout: note
title: 微信Web阅读苏菲狗吐竖屏优化宽度
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

网址匹配规则：`https://weread.qq.com/web/reader/*`

```js
(() => {
  let style = document.createElement('style')
  style.innerHTML = `@media (max-width:1365px) {.readerContent .app_content {max-width: 92%;}}`
  document.head.append(style)
})()
```
  