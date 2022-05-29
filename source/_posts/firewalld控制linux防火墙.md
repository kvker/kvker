---
layout: note
title: firewalld控制linux防火墙
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

`systemct1 start firewalld` 打开firewalld

`firewall-cmd --zone=public --add-port=5000/tcp --permanent` 打开端口写入配置文件

`firewall-cmd --restart` 重启服务

`firewall-cmd --list-all` 查看打开的端口

` firewall-cmd --query-port=5000/tcp` 检查某个端口是否打开
  