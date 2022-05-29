---
layout: note
title: Mac启动ssh服务
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

mac本身安装了ssh服务，默认情况下不会开机自启

## 启动sshd服务：
`sudo launchctl load -w /System/Library/LaunchDaemons/ssh.plist`

## 停止sshd服务：
`sudo launchctl unload -w /System/Library/LaunchDaemons/ssh.plist`

## 查看是否启动：
`sudo launchctl list | grep ssh` 如果看到下面的输出表示成功启动了：

`0 com.openssh.sshd`
  