---
layout: note
title: js元素在父元素内（非窗口）滚动距离指定
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

`element.parentElement.scrollTo(0, element.offsetTop - element.parentElement.offsetTop)`

自身相对窗口的偏移量减去父级相对窗口的偏移量
  