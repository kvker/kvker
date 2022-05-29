---
layout: note
title: css的animation百分比必须加上百分号
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

如题，我真是服了。

```css
@keyframes shake {
  0% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(0, -10%);
  }
  1% {
    transform: translate(0, 0);
  }
  75% {
    transform: translate(0, 10%);
  }
  100% {
    transform: translate(0, 0);
  }
}
```
  