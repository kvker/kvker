---
layout: note
title: JS原型链__proto__指向
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

对象a为A的实例，A为B的子类，b为B的实例。（类为模拟说明，并不是真正的类）

a.__proto__ -> A.prototype -> A的Constructor的原型 -> B的实例b
  