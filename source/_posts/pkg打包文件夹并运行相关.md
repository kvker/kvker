---
layout: note
title: pkg打包文件夹并运行相关
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

1. 配置在package.json中
2. 命令`pkg -t win32 --out-path dist/ package.json`
3. package.json关键配置
4. app.js关键配置

> dist文件夹内为打包好的静态文件，仅作参考

```json
{
  "name": "sm",
  "bin": "app.js",
  "pkg": {
    "scripts": [],
    "assets": ["dist/**/*"]
   }
}
```

```js
const http = require('http')
const fs = require('fs')
const path = require('path')

var server = http.createServer(function (req, res) {
  if (req.url === "/") {
    res.writeHead(200, {'Content-type': 'text/html'})
    fs.createReadStream(path.join(__dirname, 'dist/index.html')).pipe(res)
  } else {
    fs.createReadStream(path.join(__dirname, 'dist/' + req.url)).pipe(res)
  }
})

server.listen('8080', function () {
  console.log((new Date()) + ' Server is listening on port 8080', 8080)
})

require('child_process').exec('explorer.exe http://localhost:8080', console.error)
```
  