---
layout: note
title: express的https部署websocket的wss部署直接用express-ws
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
const express = require('express')
const app = express()
const express_ws = require('express-ws')
express_ws(app)
const body_parser = require('body-parser')
const md5 = require('md5')

app.use(body_parser.json())
app.use(body_parser.urlencoded({ extended: false }))

// 获取地图页面
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/static/hello.html')
})

app.use(express.static(__dirname + '/static/'))

// ws
// ws集合, 用来指定推送
const ws_set = {}
let ws_idx = 0

app.ws('/api/ws', function(ws, req) {
  // ws.send('你连接成功了')
  let room_code = req.query.room_code
  ws_set[room_code + ws_idx++] = ws
  ws.on('message', function(msg) {
    // 业务代码
    // console.log(msg)
  })
})
```
  