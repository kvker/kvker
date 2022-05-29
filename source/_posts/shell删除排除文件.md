---
layout: note
title: shell删除排除文件
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

`rm -rf \`ls | grep -v xxx\``
指令执行并返回，-v 是反选，xxx 可以是不带//的正则表达式
  