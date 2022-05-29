---
layout: note
title: MacBook-Pro切换显卡命令
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

sudo pmset -a GPUSwitch 0 //强制使用集显
sudo pmset -a GPUSwitch 1 //强制使用独显
sudo pmset -a GPUSwitch 2 //自动切换模式

## 自动处理电池与电源

`sudo pmset -b GPUSwitch 0`

`sudo pmset -c GPUSwitch 1`

-c 表示 charger 为电源模式，-b 表示 battery 为电池模式

0 表示用核显，1 表示用独显

还原默认：`sudo pmset -c GPUSwitch 2` ，就是自动切换模式
  