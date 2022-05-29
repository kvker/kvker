---
layout: note
title: JS继承实例
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
function Page() {
  this.dom = {}

  $$('[id]').forEach((dom) => {
    this.dom[dom.id] = dom
  })

  this.data = null
  this.data_proxy = null
  if(this.dataHandler) this.dataHandler()
  else console.error('请实现dataHandler方法')
}

function App() {
  Page.call(this, arguments)
}

// 避免两次调用继承的父类
function InheritSuper() {}
InheritSuper.prototype = Page.prototype
App.prototype = new InheritSuper()
// App.prototype.constructor = Page // 无必要
```
  