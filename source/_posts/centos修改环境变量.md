---
layout: note
title: centos修改环境变量
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```shell
vim /etc/profile 

#node path
export NODE_HOME=/usr/local/node/bin
export PATH=$NODE_HOME:$PATH
```
  