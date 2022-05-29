---
layout: note
title: Mac格式化U盘
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

先使用diskutil list命令查看U盘代号

然后用下面的命令把它格式化：

sudo diskutil eraseDisk FAT32 USER_NAME MBRFormat /dev/disk2
其中USER_NAME是格式化后的卷标，最好是大写。
/dev/disk2是格式化的盘符
如下图所示：

如果失败使用如下命令：
diskutil partitionDisk /dev/disk2 1 MBRFormat “MS-DOS FAT32” EDISON 32GB
EDISON： U盘名字
32gb：U盘的大小
  