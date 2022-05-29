---
layout: note
title: electron在devtools调试器上无法debug网络请求问题
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

渲染进程使用的请求有两种, 一种是浏览器环境的请求, 比如fetch, 还有一种是浏览器与node都可以用的, 比如axios等.

如果axios等使用cdn导入, 一般没这个问题, 如果是npm install的, 那么axios等新版会自动判断当前环境, 优先nodejs环境, 从而导致渲染进程共用的请求无法在devtools里面log出来.

已遇到axios与leancloud-storage均会有类似问题.

如果非要使用npm包运行在渲染环境中, 可配置如下:

`axios.defaults.adapter = require('axios/lib/adapters/http')`
  