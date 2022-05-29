---
layout: note
title: css的contain属性优化重绘重排
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```css
dom {
  /* 关键词值 */
  contain: none;

  /* 等价于 contain: layout style paint size */
  contain: strict;

  /* 等价于 contain: layout paint W3C链接: https://www.w3.org/TR/css-contain-2/#valdef-contain-content*/
  contain: content;

  contain: size;
  contain: layout;
  contain: style;
  contain: paint;

  /* 支持指定多个关键词 */
  contain: size paint;
  contain: size layout paint;

  /* 全局值 */
  contain: inherit;
  contain: initial;
  contain: unset;
}
```

none

表示元素将正常渲染，没有包含规则。

strict

表示除了 style 外的所有的包含规则应用于这个元素。等价于 contain: size layout paint。

content

表示这个元素上有除了 size 和 style 外的所有包含规则。等价于 contain: layout paint。

size

表示这个元素的尺寸计算不依赖于它的子孙元素的尺寸。

layout

表示元素外部无法影响元素内部的布局，反之亦然。

style

表示那些同时会影响这个元素和其子孙元素的属性，都在这个元素的包含范围内。

Indicates that, for properties that can have effects on more than just an element and its descendants, those effects don't escape the containing element. Note that this value is marked "at-risk" in the spec and may not be supported everywhere.

paint

表示这个元素的子孙节点不会在它边缘外显示。如果一个元素在视窗外或因其他原因导致不可见，则同样保证它的子孙节点不会被显示。

Indicates that descendants of the element don't display outside its bounds. If the containing box is offscreen, the browser does not need to paint its contained elements — these must also be offscreen as they are contained completely by that box. And if a descendant overflows the containing element's bounds, then that descendant will be clipped to the containing element's border-box.
  