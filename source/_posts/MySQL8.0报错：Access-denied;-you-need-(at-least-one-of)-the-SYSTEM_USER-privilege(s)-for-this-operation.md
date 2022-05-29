---
layout: note
title: MySQL8.0报错：Access-denied;-you-need-(at-least-one-of)-the-SYSTEM_USER-privilege(s)-for-this-operation
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

新权限SYSTEM_USER，于是，给root或其他账号升级为SYSTEM_USER，再继续即可。

`grant system_user on *.* to 'root';`
  