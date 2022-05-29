---
layout: note
title: superagent编码处理
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
const superagent = require('superagent')
const charset = require('superagent-charset')
const request = charset(superagent)

// 如gbk编码
await request.get(url).charset('gbk')
```
  