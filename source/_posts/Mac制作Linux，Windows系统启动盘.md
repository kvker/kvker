---
layout: note
title: Mac制作Linux，Windows系统启动盘
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

1. 格式化，磁盘工具 -> 抹掉 -> Mac日志格式
2. `diskutil list` 查看U盘所在盘符
3. `diskutil unmountDisk [刚刚查询的盘符]` 卸载盘，不是推出
4. `sudo dd if=[pathto iso] of=[刚刚的盘符] bs=1m` dd引用的ISO文件，of盘符，bs刻录单位大小（1，2，4，不要太大）
5. 等待出现 `records in records out`
  