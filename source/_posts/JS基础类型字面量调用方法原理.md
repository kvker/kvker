---
layout: note
title: JS基础类型字面量调用方法原理
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

基础类型字面量是原始类型，理论上说是没有方法调用的，他就不是个对象。

但是这种代码却能正常运行：

```js
let s1 = "some text"
let s2 = s1.substring(2)
```

这就很奇怪了，实际上是引擎在后台执行了类似的行为：

```js
let s1 = "some text"
let new_s1 = new String(s1)
let s2 = new_s1.substring(2)
new_s1 = null
```

这也就解释下下面的问题：

```js
let s1 = "some text"
s1.color = "red"
console.log(s1.color) // undefined
```

实际上：

```js
let s1 = "some text"
// s1.color = "red"
let new_s1 = new String(s1)
new_s1.color = 'red'
new_s1 = null
console.log(s1.color) // undefined
```
  