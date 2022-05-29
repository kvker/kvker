---
layout: note
title: windows修改滚轮方向
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

计算机-右键-管理-系统工具-设备管理器-鼠标和其他指针设备-打开鼠标的属性-详细信息-属性-设备实例路径

regedit 打开注册表:
HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Enum\\???\\???\\???\Device Parameters 找到 FlipFlopWheel字段 默认0，修改成1就变成了mac模式 ??? 对应 设备实例路径/
  