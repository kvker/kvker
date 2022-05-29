---
layout: note
title: JS主动触发DOM事件
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
let T = document.createEvent("HTMLEvents")
T.initEvent("change", !1, !1)
e.target.dispatchEvent(T)
```
  