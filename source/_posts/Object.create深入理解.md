---
layout: note
title: Object.create深入理解
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

`let x = Object.create(y)` 相当于把`x.__proto__ = y`

所以这里如果结合X的原型函数.prototype与Y.prototype可以实现很多有意思的继承方案，当然，如是是X的话，就是多实例共用一个继承父级实例。


注意一点，Object.create会修改constroctor，所以为了这问题，后面可以再把prototype指回自身。

```js
function T() {}

function T2() {}

T2.prototype = Object.create(T.prototype)
T2.prototype.constroctor = T2
```
  