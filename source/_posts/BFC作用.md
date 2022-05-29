---
layout: note
title: BFC作用
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

BFC：块格式化上下文（Block Formatting Context，BFC）

BFC的布局规则
1. 内部的Box会在垂直方向一个接着一个地放置。
2. Box垂直方向上的距离由margin决定。属于同一个BFC的两个相邻的Box的margin会发生重叠。
3. 每个盒子的左外边框紧挨着包含块的左边框，即使浮动元素也是如此。
4. BFC的区域不会与float box重叠。
5. BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然。
6. 计算BFC的高度时，浮动子元素也参与计算。

触发条件
1. float
2. position
3. overflow
4. display: inline-block/table-cell

BFC可以解决哪些问题？
1. 解决浮动元素令父元素高度坍塌的问题
2. 非浮动元素被浮动元素覆盖
3. 给固定栏设置固定宽度，给不固定栏开启BFC
4. 给上box或者下box任意一个包裹新的box并开启BFC

[参考](https://zhuanlan.zhihu.com/p/127187654)
  