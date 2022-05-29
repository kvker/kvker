---
layout: note
title: CSS自定义滚动条
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```css
.class::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 7px;
}
.class::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: rgba(0,0,0,.5);
  -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5);
}
```

隐藏
```css
* {
  display: none;
}
```
  