---
layout: note
title: CSS实现扇形
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

html

```html
<div class="sector"></div>
<div class="sector" style="border-radius: 0;"></div>
```

css

```css
.sector {
  display: inline-block;
  margin: 20px;
  background: red;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  animation: sector 4s linear both infinite;
  transform: rotate(45deg);
}

@keyframes sector{
  from {
    clip-path: polygon(50% 50%, 0% 0%, 0% 0%);
  }
  25% {
    clip-path: polygon(50% 50%, 0% 0%, 100% 0%);
  }
  25.000001% {
    clip-path: polygon(50% 50%, 0% 0%, 100% 0%, 100% 0%);
  }
  50%{
    clip-path: polygon(50% 50%, 0% 0%, 100% 0%, 100% 100%);
  }
  50.000001%{
    clip-path: polygon(50% 50%, 0% 0%, 100% 0%, 100% 100%, 100% 100%);
  }
  75%{
    clip-path: polygon(50% 50%, 0% 0%, 100% 0%, 100% 100%, 0% 100%);
  }
  75.000001%{
    clip-path: polygon(50% 50%, 0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 100%);
  }
  to{
    clip-path: polygon(50% 50%, 0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%);
  }
}
```
  