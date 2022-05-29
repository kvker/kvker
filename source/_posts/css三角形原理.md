---
layout: note
title: css三角形原理
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

采用的是相邻边框连接处的均分原理。

将元素的宽高设为0，只设置
  border
  ，把任意三条边隐藏掉（颜色设为
  transparent），剩下的就是一个三角形。
  
```css
#demo {
  width: 0;
  height: 0;
  border-width: 20px;
  border-style: solid;
  border-color: transparent transparent red transparent;
}
```
  