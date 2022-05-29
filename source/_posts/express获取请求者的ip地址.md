---
layout: note
title: express获取请求者的ip地址
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/api/ip', (req, res, next) => {
  let ip = req.headers['x-forwarded-for'] ||
        req.ip ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress || ''
  res.send(ip)
})

app.listen(3098, () => {
  console.log(`api run in 3098 port.`)
})
```

如果使用Nginx做了正向代理，则Nginx中添加：

```
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
```
否则会拿到127.0.0.1。
  