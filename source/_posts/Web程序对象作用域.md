---
layout: note
title: Web程序对象作用域
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

Web程序对象作用域，常用的有三个：请求作用域，会话作用域，应用上下文。 请求作用域req范围最小，需要的资源最少，作用当前请求 session会话作用于本次对话，每个对话都有JSessionID， ServletContext作用域范围大：web应用中所有都能够访问，生命周期和web容器一样长，维护所需资源多。 在满足需求内耗费的资源越小越好。
  