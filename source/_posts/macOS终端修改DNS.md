---
layout: note
title: macOS终端修改DNS
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

以WiFi为例

`networksetup -listallnetworkservices`

`networksetup -setdnsservers Wi-Fi 8.8.8.8`

`networksetup -getdnsservers Wi-Fi`

`dscacheutil -flushcache`
  