---
layout: note
title: CSS自适应viewport
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

标签申明

`<link rel="stylesheet" type="text/css" href="styleB.css" media="screen and (min-width: 600px) and (max-width: 800px)">`

意思是当屏幕的宽度大于600小于800时，应用styleB.css

css 申明


当屏幕尺寸小于600px时，应用下面的CSS样式
```css
@media screen and (max-width: 600px) {
  .class {
    background: #ccc;
  }
}
```

  