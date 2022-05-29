---
layout: note
title: 获取DOM的绝对位置
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
function   getAbsPoint(obj) {
  var   x,y;
  oRect   =   obj.getBoundingClientRect();
  x=oRect.left
  y=oRect.top
  alert("("+x+","+y+")")
}
```
  