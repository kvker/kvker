---
layout: note
title: CSS文字水平对齐
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

英文汉字均可

`div{text-align-last: justify; }`

```css
div{text-align: justify; }
div:after{display: inline-block ; content: ''; padding-left: 100%; }
```
  