---
layout: note
title: Nginx配置
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

`whereis nginx` /etc/nginx/conf.d/x.conf Linux
`/usr/local/etc/nginx/` Mac路径

子域名代理
```
server {
  server_name penyou.kvker.com;

  listen 80;

  listen 443 ssl;
  ssl_certificate crt/server.crt;
  ssl_certificate_key crt/server.key;
  ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
  ssl_prefer_server_ciphers on;

  location / {
    proxy_pass http://127.0.0.1:3030/;
    proxy_set_header Upgrade $http_upgrade; # allow websockets
    proxy_set_header Connection "upgrade";
    proxy_http_version 1.1;
    proxy_connect_timeout 60s;#l连接超时时间，不能设置太长会浪费系统资源具体参考：https://www.cnblogs.com/qianbixueyuan/p/9575031.html
    proxy_read_timeout 500s;#读超时时间
    proxy_send_timeout 500s;#写超时时间
  }
}
```
  