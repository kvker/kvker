---
layout: note
title: JS数字0开头若干长度
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
Number.prototype.format = function (length) {
  return ('0'.repeat(length) + this).substr(-length)
}
```
  