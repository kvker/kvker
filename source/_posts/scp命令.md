---
layout: note
title: scp命令
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---


在A服务器上操作，将B服务器上/home/lk/目录下所有的文件全部复制到本地的/root目录下，命令为：`scp -r root@HOST:/home/lk /root`

如果是本地弄到别的服务器，则后面反过来
  