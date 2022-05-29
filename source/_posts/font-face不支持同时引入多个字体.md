---
layout: note
title: font-face不支持同时引入多个字体
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

**正确**

```css
@font-face {
  font-family: Futura-Medium;
  src        : url("/font/Futura.ttc");
}

@font-face {
  font-family: Futura-Bold;
  src        : url("/font/Futura.ttc");
}

@font-face {
  font-family: Futura;
  src        : url("/font/Futura.ttc");
}

```

**错误**

```css
@font-face {
  font-family: Futura-Medium, Futura-Bold, Futura;
  src        : url("/font/Futura.ttc");
}
```
  