---
layout: note
title: nginx设置静态文件根目录
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```nginx
server {
  server_name temp.kvker.com;
  listen 80;
  location / {
    root /home/ubuntu/out/temp/dist;
  }
}
```
  