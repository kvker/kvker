---
layout: note
title: express的https实例
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

## 生成证书
保证你的系统中已经安装了openssl。

* 生成服务器端私钥
`openssl genrsa -out server.key 1024`
* 生成服务端公钥
`openssl rsa -in server.key -pubout -out server.pem`
* 生成CA私钥
`openssl genrsa -out ca.key 1024`
* 生成csr文件
`openssl req -new -key ca.key -out ca.csr`
* 生成自签名证书
`openssl x509 -req -in ca.csr -signkey ca.key -out ca.crt`
* 生成server.csr文件
`openssl req -new -key server.key -out server.csr`
* 生成带有ca签名的证书
`openssl x509 -req -CA ca.crt -CAkey ca.key -CAcreateserial -in server.csr -out server.crt`

## 使用证书

```js
const path = require('path')
const express = require("express")
const https = require('https')
const fs = require('fs')
const app = express()
const port = 443
const host = '10.154.56.197'
// const bodyParser = require("body-parser")
app.use(express.static(path.resolve(__dirname, '..')))
// 证书配置
const privateKey = fs.readFileSync(__dirname + '/*.key')
const certificate = fs.readFileSync(__dirname + '/*.pem')
const credentials = { key: privateKey, cert: certificate }

// 根路径
app.get('/', (req, res) => {
  const fileName = 'index.html'
  fs.readFile(filePath, function (err, data) {
    if (err) {
      res.end("<h1>500</h1>服务器内部错误！");
    } else {
      res.writeHead(200, { 'content-type': contentType });
      res.end(data.toString());
    }
  })
})

// 启动服务
https.createServer(credentials, app).listen(port, host, err => {
  if (err) console.log(err)
  else console.log(`run in https://${host}:${port}`)
})
```
  