---
layout: note
title: CMD杀死进程链
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

`TASKKILL /IM XXX.exe /T /F`

可用于node.js脚本

```js
const exec = require('child_process').exec

setInterval(() => {
  const hour = new Date().getHours()
  // 晚上7点区间关闭xxx进程
  if(hour > 18 && hour < 20) {
    exec('TASKKILL /IM xxx.exe /T /F', error => {
      if(error) console.log(error)
      else console.log('success')
    })
  }
}, 1800000)
```
  