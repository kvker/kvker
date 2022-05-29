---
layout: note
title: window上杀死node进程
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

1、查询端口占用的进程ID

点击"开始"-->"运行",输入"cmd"后点击确定按钮,进入DOS窗口,接下来分别运行以下命令:

`netstat -a -n`  #各个端口占用

`netstat -ano`   #各个端口占用和进程PID 

`netstat -aon | findstr "8080"` 

`C:\Users\admin>netstat -aon|findstr "8080"`

```
TCP    127.0.0.1:9080         0.0.0.0:0              LISTENING       4456
```

2、查看端口号所对应的应用程序

`tasklist | findstr "4456" `

补充： tasklist /fi "pid eq 4456"

`GROOVE.EXE 4456 Console 1 84,880 K`

很明显,是GROOVE.EXE 占用了80端口，GROOVE.EXE 一个IE的ACTIVEX控件。

3、终止进程

`taskkill /pid 4456 /F `

或则使用 `taskkill /f /t /im GROOVE.exe`

再次查询是否成功终止

`tasklist | findstr "4456"`

如果成功终止此次执行命令后应返回空.，则表示成功，终止 PID 为 4456 的进程。
  