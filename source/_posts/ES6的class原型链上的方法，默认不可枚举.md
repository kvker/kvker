---
layout: note
title: ES6的class原型链上的方法，默认不可枚举
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

因此，无法使用class间的混合，除非手动设置成可枚举。

```js
Object.defineProperty(temp1, 'key1', {
  enumerable: true
})
```
  