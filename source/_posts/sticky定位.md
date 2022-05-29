---
layout: note
title: sticky定位
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

sticky是relative、absolute、fixed、static以及inherit后，新的一个定位模式，其功能就是在页面内时候依据relative定位，当超出屏幕的时候，即可采用类似fixed布局一样显示在屏幕内固定位置。

## sticky生效前提

1. 父元素不能overflow:hidden或者overflow:auto属性。
2. 必须指定top、bottom、left、right4个值之一，否则只会处于相对定位
3. 父元素的高度不能低于sticky元素的高度
4. sticky元素仅在其父元素内生效
