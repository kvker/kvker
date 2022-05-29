---
layout: note
title: github国内clone慢的问题
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

## 查询告诉CDN IP

[CDN](https://fastly.net.ipaddress.com/github.global.ssl.fastly.net)

在IP Address and Server Location模块拷贝IP

## 修改host

```
vim /etc/hosts
# GitHub Start
IP github.global.ssl.fastly.net
```
  