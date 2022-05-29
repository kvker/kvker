---
layout: note
title: Number.EPSILON
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

一个大于1且最接近于1的浮点数之间的差值，可以用于判断浮点计算，如：

```js
0.1 + 0.2 - 0.3 < Number.EPSILON // true
```
  