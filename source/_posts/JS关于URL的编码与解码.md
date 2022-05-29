---
layout: note
title: JS关于URL的编码与解码
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

`encodeURI(str1)` 返回一个%编码类型的字符串，不对特殊符号处理，如: http://www.cnblogs.com/%202012/%2071.html
`decodeURI(str2)` 解码
`encodeURIComponent(str3)` 返回一个%编码类型的字符串，对特殊符号一起处理，如: http%3A%2F%2Fwww.cnblogs.com%2F%202012%2F%2071.html
`decodeURIComponent(str4)` 解码
  