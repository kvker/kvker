---
layout: note
title: ssh开启关闭密码登录
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

vim /etc/ssh/sshd_config



修改 PasswordAuthentication yes/no



重启服务 service sshd restart
  