---
layout: note
title: event的捕获阶段用处
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

大多数情况都是考虑冒泡，但是有一些场景是需要捕获处理的，最常见的就是封装滚动组件时候，一般都是滚动组件的捕获阶段处理滚动，不能在冒泡阶段处理。
  