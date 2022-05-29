---
layout: note
title: CSS伪随机背景条纹
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

只要利用到质数的公倍数与公约数技巧

```css
div {
  background: hsl( 20, 40%, 90%);
  background- image: linear- gradient( 90deg, #fb3 11px, transparent 0), linear- gradient( 90deg, #ab4 23px, transparent 0), linear- gradient( 90deg, #655 41px, transparent 0);
  background- size: 41px 100%, 61px 100%, 83px 100%;
}
```
  