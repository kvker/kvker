---
layout: note
title: picture标签
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

浏览器将查找媒体查询与当前视口宽度匹配的第一个 <source> 元素，然后显示正确的图像（在 srcset 属性中指定）。 <img> 元素是 <picture> 元素的最后一个子元素，如果没有 source 标签匹配，则作为后备选项。

```html
<picture>
  <source media="(min-width:650px)" srcset="/i/photo/flower-4.jpg">
  <source media="(min-width:465px)" srcset="/i/photo/tulip.jpg">
  <img src="#" alt="Flowers" style="width:auto;">
</picture>
```
  