---
layout: note
title: vue依赖注入
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

# 依赖注入

## 解决多重传递方法使用 $parent 问题

父组件（祖先组件）

```js
provide: function () {
  return {
    getMap: this.getMap
  }
}
```

子组件（重孙组件）

```js
inject: ['getMap']
```
  