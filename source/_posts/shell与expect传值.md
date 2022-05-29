---
layout: note
title: shell与expect传值
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

[script] 内部申明的变量会在当前进程打开并保留，中间有空格

git push 自动化，举例
申明变量的脚本文件
```sh
GIT_USERNAME=username
GIT_PASSWORD=password
```
调用变量的脚本

```sh
#!/bin/bash

~/var/gitconfig

~/script/git/push.exp $GIT_USERNAME $GIT_PASSWORD
```
最终使用的另一个脚本
```sh
#!/usr/bin/expect

set USERNAME [lindex $argv 0]
set PASSWORD [lindex $argv 1]

spawn git push

expect "Username"
send "$USERNAME\r"

expect "Password"
send "$PASSWORD\r"

expect eof
```
  