---
layout: note
title: CSS背景色渐变
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```css
* {
  background: -moz-linear-gradient(left, orange 0%, red 100%);
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, orange), color-stop(100%, red));
  background: -webkit-linear-gradient(left, orange 0%, red 100%);
  background: -o-linear-gradient(left, orange 0%, red 100%);
  background: -ms-linear-gradient(left, orange 0%, red 100%);
  background: linear-gradient(to right, orange 0%, red 100%);
}
```
  