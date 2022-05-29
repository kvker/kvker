---
layout: note
title: JS的proxy代理
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

target为原始值

reciver为代理


属性值 | 监听器参数 | 监听内容
- | - | -
has	| (target, prop)	| 监听 in 语句的使用
get	| (target, prop, reciver)	| 监听目标对象的属性读取
set	| (target, prop, value, reciver)	| 监听目标对象的属性赋值
deleteProperty	| (target, prop)	| 监听 delete 语句对目标对象的删除属性行为
ownKeys	| (target)	| 监听 Object.getOwnPropertyName() 的读取
apply	| (target, thisArg, arguments)	| 监听目标函数(作为目标对象)的调用行为
construct	| (target, arguments, newTarget)	| 监听目标构造函数(作为目标对象)利用 new 而生成实例的行为
getPrototypeOf	| (target)	| 监听 Objext.getPrototypeOf() 的读取
setPrototypeOf	| (target, prototype)	| 监听 Objext.setPrototypeOf() 的调用
isExtensible	| (target)	| 监听 Objext.isExtensible() 的读取
preventExtensions	| (target)	| 监听 Objext.preventExtensions() 的读取
getOwnPropertyDescriptor	| (target, prop)	| 监听 Objext.getOwnPropertyDescriptor() 的调用
defineProperty	| (target, property, descriptor)	| 监听 Object.defineProperty() 的调用
  