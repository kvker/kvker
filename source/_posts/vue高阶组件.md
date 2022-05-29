---
layout: note
title: vue高阶组件
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```pug
button.select(
  v-on='$listeners'
)
  .left
    span {{title}}
    span.star(
      v-if="starShow"
    ) *
  .right
    input(
      disabled
      v-bind="$attrs"
      v-bind="$props"
    )
    span.arrow >
```
  