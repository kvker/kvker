---
layout: note
title: CSS蚂蚁行军
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```css
@keyframes ants {
  to {
    background-position: 100%
  } 
}

.box {
  padding: 1em;
  border:  1px solid transparent;
  background: linear-gradient(white, white) padding-box,
                       repeating-linear-gradient(-45deg, black 0, black 25%, white 0, white 50%) 0 / .6em .6em;
  animation: ants 12s linear infinite;
}
```
  