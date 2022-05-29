---
layout: note
title: nodejs最简本地代理
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
const express = require('express')
const proxy = require('http-proxy-middleware')

const app = express()

const target = 'http://ry.go2there.top'

app.use(express.static('./'))

app.use('/Api', proxy.createProxyMiddleware({
  target,
  changeOrigin: true,
  // 重写 set-cookie 的所有域名为本地
  cookieDomainRewrite: {
    "*": "localhost",
  }
}))

app.listen(8000)
```
  