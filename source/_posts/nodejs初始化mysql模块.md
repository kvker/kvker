---
layout: note
title: nodejs初始化mysql模块
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
const mysql = require('mysql')

const is_dev = process.env.NODE_ENV === 'dev'

let option = {
  host: 'host1',
  port: 'port1',
  user: 'u1',
  password: 'p1',
  database: 'd1',
  // 多行支持
  multipleStatements: true,
  charset: "utf8mb4",
}

if(is_dev) {
  option = {
    host: 'host2',
  port: 'port2',
  user: 'u2',
  password: 'p2',
  database: 'd2',
  // 多行支持
  multipleStatements: true,
  charset: "utf8mb4",
  }
}

// 返回连接池
module.exports = {
  pool: mysql.createPool(option),
}
```
  