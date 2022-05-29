---
layout: note
title: css蒙板原理
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

mask

图片为rgb显示，mask的png（或渐变）是带有alpha的rgba，所以最终合成效果是mask上alpha不等于0的非透明扣到原图上，原图的alpha不等于0所以显示，而原本的mask上alpha是0的扣上去导致原图的alpha为0反而不显示。这个是反常识的，原理不懂会一脸懵逼。
  