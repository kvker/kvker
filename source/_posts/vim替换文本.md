---
layout: note
title: vim替换文本
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

当前行

:s/from/to/

多行(m行到n行)

:m,ns/from/to/g


全局

:%/from/to/g

  