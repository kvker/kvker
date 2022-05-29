---
layout: note
title: Node.js命令行运行传参
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

`node path.js arg0 arg1 arg2 ...` 命令

`process.argv[2]` 后面依次从2开始，因为0是node，2是js文件完整路径
  