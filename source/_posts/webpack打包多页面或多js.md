---
layout: note
title: webpack打包多页面或多js
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

### 多页面


```
var path = require('path')
module.exports = {
    entry: {
        one: "./src/one.js",
        two: "./src/two.js"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js"
    }
}
```

### 多js

```
var path = require('path')
module.exports = {
    entry: ["./src/one.js", "./src/two.js" ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "app.js"
    }
}

```
  