---
layout: note
title: delete操作符的坑
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

delete() delete 操作符用于删除对象的某个属性
var, let以及const创建的不可设置的属性不能被delete操作删除
不可配置属性configurable
当且仅当该属性的 configurable 为 true 时，该属性描述符才能够被改变，同时该属性也能从对应的对象上被删除。默认值为true。

可以如此验证

Object.getOwnPropertyDescriptor(window, 'a')

Object.getOwnPropertyDescriptor(window, 'b')

Object.getOwnPropertyDescriptor(window, 'c')

函数形参无法delete
  