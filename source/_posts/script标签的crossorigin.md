---
layout: note
title: script标签的crossorigin
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

两个值，anonymous与use-credentials，空值等于anonymous。

区别主要在于，如果后端开了js资源跨域的情况下，anonymous会打印出引用js的错误，而use-credentials不会报出内部错误，而是常见的`Script Error`。
  