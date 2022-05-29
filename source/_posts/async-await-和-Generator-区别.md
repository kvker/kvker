---
layout: note
title: async-await-和-Generator-区别
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

## async await 和 Generator 区别
async/await实际上是对Generator（生成器）的封装，async函数是Generator函数的语法糖，将Generator的星号换成async，将yield换成await，async函数比Generator函数更好用.

### Generator与async function都是返回一个特定类型的对象：

1. async/await自带执行器，不需要手动调用next()就能自动执行下一步
2. async始终返回一个Promise，使用await或者.then()来获取返回值，而Generator返回的是生成器对象，一个类似{ value: XXX, done: true }这样结构的Object
await能够返回Promise的resolve/reject的值
  