---
layout: note
title: express接口添加代理
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

`express-http-proxy`

const proxy = require('express-http-proxy')

app.use(
  '/proxyapi',
  proxy('https://www.baidu.com', {
    proxyReqPathResolver(req, res) {
      return req.originalUrl
    },
  })
),
  