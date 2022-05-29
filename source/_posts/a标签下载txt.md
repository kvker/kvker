---
layout: note
title: a标签下载txt
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
// 注意Blob构造第一个参数是数组
let blob = new Blob([result], { type: "text/plain" })
let object_url = URL.createObjectURL(blob)
let a = document.createElement('a')
a.href = object_url
a.download = 'name.txt'
a.click()
```
  