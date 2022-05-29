---
layout: note
title: Windows环境下npm-install-报错--operation-not-permitted,-rename的解决方法
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

在命令后面加上`--no-bin-links`即可

如

`npm install --no-bin-links`
  