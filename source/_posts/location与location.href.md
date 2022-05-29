---
layout: note
title: location与location.href
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

HTML 规范都用 webidl 语言来描述接口规范，尽量不用啰嗦的英语，webidl 语言专门为这种情况增加了一个属性，叫 [PutForwards], 比如 window.location属性的接口描述是这样的：`[PutForwards=href, Unforgeable] readonly attribute Location location`

PutForwards=href的意思就是说“给这个属性的赋值操作”要转发成为给这个属性的当前值的 href属性赋值。

类似的有`window.location === document.location`里面的document.location。

`[PutForwards=cssText, Constant] readonly attribute CSSStyleDeclaration style`

很明显，意味着`dom.style = string`等价于`dom.style.cssText = string`
  