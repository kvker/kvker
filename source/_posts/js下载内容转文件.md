---
layout: note
title: js下载内容转文件
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
let blob = new Blob([document.querySelector('.content').textContent], { type: "text/plain" })
    let objectUrl = URL.createObjectURL(blob)
    let a = document.createElement("a")
    document.body.appendChild(a)
    a.href = objectUrl
    a.download = document.title + '.md'
    a.click()
    document.body.removeChild(a)
```
  