---
layout: note
title: cocos-creator组件node与脚本关系
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
this.hero = this.node.getChildByName('hero')
cc.log(this.hero.getComponent('hero').node === this.hero) // true
```
  