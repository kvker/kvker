---
layout: note
title: superagent登录获取cookie
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
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

let mycookie = '' // 自行添加 Cookie

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
  res.header("Access-Control-Allow-Headers", "X-Requested-With")
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

app.get('/*', (req, res) => {
  let ServerCookie = req.headers.cookie + ";" + mycookie

  superagent
    .get(`https://dev.test.gitinn.com${req.url}`)
    .send(req.query)
    .set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
    .set('Cookie', ServerCookie)
    .end((err, resRequest) => {
      if (err) console.log(err)
      else res.end(JSON.stringify(resRequest.body))
    })
})

app.post('/*', (req, res) => {
  let ServerCookie = req.headers.cookie + ";" + mycookie
  // console.log(req.body)
  superagent
    .post(`https://dev.test.gitinn.com${req.url}`)
    .send(req.body)
    .set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
    .set('Cookie', ServerCookie)
    .end((err, resRequest) => {
      // console.log(mycookie)
      // 设置 Cookie
      if(!mycookie) mycookie = resRequest.headers['set-cookie']

      if (err) console.log(err)
      else res.end(JSON.stringify(resRequest.body))
    })
})

app.listen(8082, "localhost", () => {
  console.log("run in http://localhost:8082")
})
```
  