---
layout: note
title: js默认参数的坑
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

`f = (x = x) => x;`

f(2)不报错是因为 x = x 的错误语法被忽略了

f()报错就是未声明问题
  