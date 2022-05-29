---
layout: note
title: CSS多色条纹
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

双色与三色

```css
div {
  background-image: linear-gradient(red 33.3%, yellow 0);
  background-size: 100% 30px;
}

div {
  // 兼容性差点
  // background-image: repeating-linear-gradient(45deg, black 0 15px, transparent 0 30px);
  background-image: linear-gradient(red 33.3%, yellow 0, yellow 66.6%, blue 0);
  background-size: 100% 30px;
}
```
  