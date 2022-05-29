---
layout: note
title: express最简网络代理
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
var express = require('express');
var request = require('request');
var app = express();
app.use('/', function(req, res) {
    var url = 'https://www.baidu.com/' + req.url;
    req.pipe(request(url)).pipe(res);
});
app.listen(process.env.PORT || 3000); 
```
  