---
layout: note
title: 查询浏览器当前网页占用的localStorage容量
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

`unescape(encodeURIComponent(JSON.stringify(localStorage))).length` 单位字节，KB则/1024，MB则/1024/1024

`1024 * 1024 * 5 - unescape(encodeURIComponent(JSON.stringify(localStorage))).length` 剩余容量，一般浏览器限制在5M
  