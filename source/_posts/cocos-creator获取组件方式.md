---
layout: note
title: cocos-creator获取组件方式
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
//获取节点
var node=cc.find("Canvas/logo")
//获取精灵组件
var sprite=node.getComponent(cc.Sprite)
```
  