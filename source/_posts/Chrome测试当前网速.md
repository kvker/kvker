---
layout: note
title: Chrome测试当前网速
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

`navigator.connection.downlink`

connection.downlink返回的并不是用户当前环境的展示的网络传输速度，而是当前网络的带宽，官方说法是：返回以Mb/s为单位的有效带宽，并保留该值为25kb/s的最接近的整数倍。
  