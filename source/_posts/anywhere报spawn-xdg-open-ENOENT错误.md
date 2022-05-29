---
layout: note
title: anywhere报spawn-xdg-open-ENOENT错误
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

原因是anywhere默认会尝试调用浏览器，而在服务器环境是没有浏览器的，所以导致报错。

解决方案就是在命令后面加上 `-s` 即可。
  