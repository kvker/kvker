---
layout: note
title: express最简启动
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
const express = require('express')
const app = express()
const body_parser = require('body-parser')

// parse application/json
app.use(body_parser.json())
// parse application/x-www-form-urlencoded
app.use(body_parser.urlencoded({ extended: false }))

app.get('/', (req, res) => res.send('Hello World!'))
app.post('/p', (req, res) => res.json({
  result: 'Hello World POST!'
}))

app.listen(8888, () => {
  console.log(`api run in 8888 port.`)
})
```
  