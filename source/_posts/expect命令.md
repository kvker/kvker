---
layout: note
title: expect命令
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---


`expect -c 'expect "xxx" {send "ad enter\n"}'` 命令行直接使用
**zftp + ip + username + password 通用 ftp 自动登录模板**
```
#!/usr/bin/expect
#expect 执行，不是/bin/bash 执行
#ip，username，password 顺序
set SERVER_IP [lindex $argv 0]
set USER [lindex $argv 1]
set PASS [lindex $argv 2]
#spawn 是控制台执行某个指令
spawn ftp $SERVER_IP
#expect 表示出现了相应的字符就执行 send
expect "Name"
#send 表示模拟键盘输入内容，\r 是回车动作，\n 是普通换行符
send "$USER\r"
expect "Password"
send "$PASS\r"
#交互执行完成后继续留下, 如 ftp 之后就需要留下, 否则就直接退出去了
interact
#如果交互程序执行完成就退出的监听
#expect eof
```
**下面是某个固定 ip 快捷方式**
```
#!/usr/bin/expect
#expect 执行，不是/bin/bash 执行
set SERVER_IP 192.168.10.248
set USER ftpuser
set PASS aa123456
#spawn 是控制台执行某个指令
spawn ftp $SERVER_IP
#expect 表示出现了相应的字符就执行 send
expect "Name"
#send 表示模拟键盘输入内容，\r 是回车动作，\n 是普通换行符
send "$USER\r"
expect "Password"
send "$PASS\r"
#交互执行完成后继续留下
interact
#如果交互程序执行完成就退出的监听
#expect eof
```

  