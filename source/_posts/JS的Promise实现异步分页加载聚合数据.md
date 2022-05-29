---
layout: note
title: JS的Promise实现异步分页加载聚合数据
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

除却await与async方案外，不需要是用递归处理：
```js
let p_list = []
for(let item of array) {
  p_list.push(new Promise(resolve => {
    resolve(anydo(item))
  }))
}

Promise.all(p_list).reduce((p, c, index) => {
  return p += anydo2(c)
}, '')
```
  