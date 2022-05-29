---
layout: note
title: Node.JS本地实例
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
const superagent = require('superagent')
const express = require('express')
const path = require('path')
const app = express()

let mycookie = '' // 自行添加 Cookie
app.use(express.static(__dirname))

app.get('/*', (req, res) => {
  let ServerCookie = req.headers.cookie + ";" + mycookie

  superagent
    .get(`https://beta.007vin.com${req.url}`)
    .send(req.query)
    .set('Content-Type', 'application/json;charset=UTF-8')
    .set('Cookie', ServerCookie)
    .end((err, resRequest) => {
        if(err) console.log(err)
        else res.end(JSON.stringify(resRequest.body))
    })
})

app.post('/*', (req, res) => {
  let ServerCookie = req.headers.cookie + ";" + mycookie

  superagent
    .post(`https://beta.007vin.com${req.url}`)
    .send(req.query)
    .set('Content-Type', 'application/json;charset=UTF-8')
    .set('Cookie', ServerCookie)
    .end((err, resRequest) => {
        if(err) console.log(err)
        else res.end(JSON.stringify(resRequest.body))
    })
})

app.listen(8080, "localhost", () => {
  console.log("run in http://localhost:8080")
})
```
  