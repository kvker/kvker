---
layout: note
title: JS获取处理伪类样式
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

只读，不可修改。
```js
var color = window.getComputedStyle(
	document.querySelector('.element'), ':before'
).getPropertyValue('color')
```

可以通过样式覆盖处理
  