---
layout: note
title: 小程序使用插槽slot
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

## 激活插槽，在自定义组件的JS中，添加一下代码

```js
 /**
   * 启用插槽
   */
  options:{
    multipleSlots: true
  }
```

## 插槽内容
```html
<view class='container'>
  <text>{{text}}</text>
  <!-- slot 插槽 -->
  <slot name="after"></slot>
</view>
```

## 调用插槽
```html
 <m-tag text="{{item.content}}">
    <text slot="after">{{item.nums}}</text>
 </m-tag>
```
  