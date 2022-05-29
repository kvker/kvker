---
layout: note
title: win10删除3D对象视频等文件夹
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

1. 注册表定位到`HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\MyComputer\NameSpace`
2. 删除如下表对应子条目

名称|值
-|-
3D 对象|{0DB7E03F-FC29-4DC6-9020-FF41B59E513A}
图片|{24ad3ad4-a569-4530-98e1-ab02f9417aa8}
音乐|{3dfdf296-dbec-4fb4-81d1-6a3438bcf4de}
视频|{f86fa3ab-70d2-4fc7-9c99-fcbf05467f3a}
下载|{088e3905-0323-4b02-9826-5d99428e115f}
桌面|{B4BFCC3A-DB2C-424C-B029-7FE99A87C641}
文档|{d3162b92-9365-467a-956b-92703aca08af}

如果需要恢复，重新新建对应的子“项”即可
  