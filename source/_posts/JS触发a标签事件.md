---
layout: note
title: JS触发a标签事件
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
var a = document.createElement("a")
a.href = 'qqmap://map/'
// document.body.appendChild(a)
var T = document.createEvent("HTMLEvents");
T.initEvent("click", !1, !1)
a.dispatchEvent(T)
```
  