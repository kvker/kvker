---
layout: note
title: rpmdb--BDB0113
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```
[root@cly ~]# cd /var/lib/rpm
[root@cly rpm]# rm -rf __db*
[root@cly rpm]# rpm --rebuilddb
```
  