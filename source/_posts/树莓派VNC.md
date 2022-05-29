---
layout: note
title: 树莓派VNC
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---


## 树莓派

`sudo apt-get update` 安装前更新

`sudo apt-get install vnc4server` 安装程序

`vncserver :1` 启动服务，默认端口 5901

`vncserver :1 -geometry 1440x900` 启动服务, 并设置分辨率

`vncserver -kill :1` 关闭服务

`vi ~/.vnc/xstartup` 配置文件，需要运行一次才自动生成

`mate-session &` 在配置的 `x-window-manager &` 后面加上

## Mac

屏幕共享软件即可

## PC

推荐使用 Chrome 的 VNC 程序, 轻量, 方便

VNC® Viewer for Google Chrome™

如果不能翻墙, 则下载对应程序

RealVNC

执行程序, 输入 对应 ip:1 连接即可, 后面是启动服务时设置的端口号
  