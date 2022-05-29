---
layout: note
title: HTTP过程简述
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

1. 对www.baidu.com这个网址进行DNS域名解析，得到对应的IP地址

2. 根据这个IP，找到对应的服务器，发起TCP的三次握手

3. 建立TCP连接后发起HTTP请求

4. 服务器响应HTTP请求，浏览器得到html代码

5. 浏览器解析html代码，并请求html代码中的资源（如js、css图片等）（先得到html代码，才能去找这些资源）

6. 浏览器对页面进行渲染呈现给用户
  