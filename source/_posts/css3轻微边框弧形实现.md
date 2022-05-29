---
layout: note
title: css3轻微边框弧形实现
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```css
.form {
  z-index: 1;
  &::after {
    content: '';
    width: calc(100% + 100px);
    height: 300%;
    position: absolute;
    left: -100px;
    top: -100%;
    border-radius: 50% 0 0 50%;
    background-color: white;
    z-index: -1;
  }
}
```
  