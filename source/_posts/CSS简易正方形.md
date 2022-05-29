---
layout: note
title: CSS简易正方形
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

## vw屏幕宽(viewport)

```css
a {
  width: 10vw;
  height: 10vw;
}
```

## padding

**注意设置height为0, 否则会多余height高度,此方法适用于背景图**

```css
a {
  width: 30%;
  height: 0;
  padding-bottom: 30%;
}
```
  