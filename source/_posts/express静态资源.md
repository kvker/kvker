---
layout: note
title: express静态资源
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
const express = require('express')
const path = require('path')
const app = express()
app.use(express.static(path.join(__dirname, './'))) // 静态资源路径
```
  