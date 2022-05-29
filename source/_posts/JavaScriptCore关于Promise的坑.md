---
layout: note
title: JavaScriptCore关于Promise的坑
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

由于实现原因与 iOS JavaScriptCore 限制，iOS 环境下的 Promise 是一个使用 setTimeout 模拟的 Polyfill。这意味着 Promise 触发的任务为普通任务，而非微任务，进而导致 在 iOS 下的 Promise 时序会和标准存在差异。


```js
var arr = []

setTimeout(() => arr.push(6), 0)
arr.push(1)
const p = new Promise(resolve => {
  arr.push(2)
  resolve()
})
arr.push(3)
p.then(() => arr.push(5))
arr.push(4)
setTimeout(() => arr.push(7), 0)

setTimeout(() => {
  // 应该输出 [1,2,3,4,5,6,7]
  // 在 iOS 小程序环境，这里会输出 [1,2,3,4,6,5,7]
  console.log(arr)
}, 1000)
```
  