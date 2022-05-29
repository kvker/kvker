---
layout: note
title: express允许跨域
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
  res.header("Access-Control-Allow-Headers", "*")
  // 避免options被阻断导致无法post等
  if(req.method === "OPTIONS") {
    res.sendStatus(200)
  } else {
    next()
  }
})
```
  