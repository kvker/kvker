---
layout: note
title: url过长导致a标签无法下载处理
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
// let url = 'data:text/csv;charset=utf-8,\ufeff' + encodeURIComponent(str)
  //通过创建a标签实现
  let link = document.createElement("a")
  link.href = URL.createObjectURL(new Blob([str])) // url
```
  