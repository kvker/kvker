---
layout: note
title: CSS横向滚动
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

Flex版本

```css
.super {
  display: flex;
  width: 100%;
  overflow-x: scroll;
  white-space: nowrap;
}
.sub {
  width: 200px;
  height: 50px;
  flex-basis: 200px; 子容器基准大小
  flex-shrink: 0; 表示在不伸缩的情况下子容器的原始尺寸
}
```

常规版本

```css
.super {
  width: 100%;
  overflow-x: scroll;
  white-space: nowrap;
}
.sub {
  display: inline-block;
  width: 200px;
  height: 50px;
}
```
  