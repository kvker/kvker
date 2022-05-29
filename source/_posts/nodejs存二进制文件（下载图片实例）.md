---
layout: note
title: nodejs存二进制文件（下载图片实例）
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
const superagent = require('superagent')
const fs = require('fs')

superagent.get('https://i.pximg.net/img-original/img/2020/01/19/11/53/07/78980289_p0.jpg')
  .http2()
  .set('authority', 'i.pximg.net')
  .set('method', 'GET')
  .set('path', '/img-original/img/2019/07/22/18/17/45/75856591_p0.png')
  .set('scheme', 'https')
  .set('referer', 'https://www.pixivision.net/zh/a/5628')
  // .set('accept-encoding', 'gzip, deflate, br')
  // .set('accept-language', 'zh-CN,zh;q=0.9,en;q=0.8,la;q=0.7,da;q=0.6,zh-TW;q=0.5')
  // .set('accept', '*/*')
  // .set('sec-fetch-dest', 'empty')
  // .set('sec-fetch-mode', 'cors')
  // .set('sec-fetch-site', 'cross-site')
  // .set('user-agent', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36')
  .then(res => {
    fs.writeFile("./a.jpg", res.body, "binary", function(err) {
      if(err) throw err
    })
  }).catch(console.error)
```
  