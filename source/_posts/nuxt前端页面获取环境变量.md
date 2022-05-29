---
layout: note
title: nuxt前端页面获取环境变量
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

在nuxt.confjg.js中配置env，前端则可以与服务端共享环境变量

```js
env: {
  env1: '1',
  env2: '2',
}
```

注意：

console.log(process.env) // 在前端环境会打印出{}
console.log(process.env.env1) // 实际上是有东西1的
  