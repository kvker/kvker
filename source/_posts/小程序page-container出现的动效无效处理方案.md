---
layout: note
title: 小程序page-container出现的动效无效处理方案
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

应该是bug，需要实现bindenter方法才行，哪怕是空函数

` bindenter="enterPageContainer"`
  