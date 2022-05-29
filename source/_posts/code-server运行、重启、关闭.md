---
layout: note
title: code-server运行、重启、关闭
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

`sudo systemctl enable --now code-server@$USER`

`sudo systemctl restart --now code-server@$USER`

`sudo systemctl stop --now code-server@$USER`

配置文件: ` ~/.config/code-server/config.yaml`
  