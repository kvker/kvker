---
layout: note
title: HTML让某些DOM可编辑
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

* 某个元素可以编辑，设置 `contenteditable='true'` 属性
* 整个页面可编辑 `document.designMode = 'on'` 

所以，最快速的文本编辑器：

`data:text/html, <html contenteditable>`
  