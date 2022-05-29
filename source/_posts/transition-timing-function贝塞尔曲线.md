---
layout: note
title: transition-timing-function贝塞尔曲线
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

cubic-bezier即为贝兹曲线中的绘制方法。有四点，分别为P0-3，其中P0、P3是默认的点，对应了[0,0], [1,1]。而剩下的P1、P2两点则是我们通过cubic-bezier()自定义的。cubic-bezier(x1, y1, x2, y2) 为自定义，x1,x2,y1,y2的值范围在[0, 1]。
  