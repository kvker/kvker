---
layout: note
title: 修改windows的hosts并刷新
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

`C:\windows\system32\drivers\etc` 下的hosts，一般无法直接修改，可以拷贝一个修改重命名，然后管理员权限重命名成hosts

不用重启的刷新

`ipconfig /displaydns` 查询DNS缓存
`ipconfig /flushdns` 刷新DNS缓存
  