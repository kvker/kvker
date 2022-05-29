---
layout: note
title: crypto-js的sha1加密
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
const { SHA1, enc } = require('crypto-js')
enc.Hex.stringify(SHA1(base))
```
  