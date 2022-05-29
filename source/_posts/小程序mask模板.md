---
layout: note
title: 小程序mask模板
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```html
<view class="mask" catchtouchmove="ture">
  <slot></slot>
</view>
```

```css
.mask {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.70);
  z-index: 99;
}

.mask>view {
  background: #fff;
  border-radius: 8px;
}
```
  