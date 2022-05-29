---
layout: note
title: win10查询已连接的wifi密码
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

前提是已经连接过

powershell管理员模式

`netsh wlan show profile name="wifi名字" key=clear`
  