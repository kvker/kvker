---
layout: note
title: Nginx关于SSL证书安装并将80指向443端口
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```
server {
        listen 80;
#填写绑定证书的域名
        server_name www.xxx.cn;
#把http的域名请求转成https
        rewrite ^(.*)$ https://$host$1 permanent;
}
server {
#SSL 访问端口号为 443
        listen 443;
#填写绑定证书的域名
        server_name www.xxx.cn;
#启用 SSL 功能
        ssl on;
#证书文件名称
        ssl_certificate cert/www.crt;
#私钥文件名称
        ssl_certificate_key cert/www.key;
        ssl_session_timeout 5m;
#请按照这个协议配置
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
#请按照这个套件配置，配置加密套件，写法遵循 openssl 标准。
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
        ssl_prefer_server_ciphers on;
        location / {
                proxy_set_header X-Real-IP $remote_addr;
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                proxy_set_header Host $http_host;
                proxy_set_header X-NginX-Proxy true;
                proxy_pass http://127.0.0.1:4000/;
        }
}
```
  