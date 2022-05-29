---
layout: note
title: ssh自动重连心跳包设置
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

修改文件`sudo vi ~/.ssh/config`
命令：

```
ServerAliveInterval 120
TCPKeepAlive no
```
  