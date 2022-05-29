---
layout: note
title: JS继承工厂
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
function PureInheritClass(BaseClass) {
  const SubClass = function() {
    BaseClass.call(this, arguments)
  }
  const InheritSuper = function () {}
  InheritSuper.prototype = BaseClass.prototype
  SubClass.prototype = new InheritSuper()
  // SubClass.prototype.constructor = BaseClass // 无必要
  return SubClass
}
```

实例

```js
function Base1() {console.log(1)}
const Sub1 = PureInheritClass(Base1)
let sub1 = new Sub1() // 1
```
  