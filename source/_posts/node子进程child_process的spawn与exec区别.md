---
layout: note
title: node子进程child_process的spawn与exec区别
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

spawn
返回值： stream
方式异步输出stdout stderr
适合：适合处理large data 、 img 、 binary

exec
返回值： buffer
方式：异步
默认缓冲区大小200k

  