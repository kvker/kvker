---
layout: note
title: express的body-parser用法
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
const express = require('express')
const bodyParser = require('body-parser');
const app = express()

// 对body-parser进行配置
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
```
  