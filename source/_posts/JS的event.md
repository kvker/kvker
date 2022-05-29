---
layout: note
title: JS的event
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
// 接收方
document.addEventListener("test", function(e){
    alert(e.name)
})

// 发送方
var event = new Event("test")
event.name = "I am test."
document.dispatchEvent(event)
```
  