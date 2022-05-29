---
layout: note
title: 封装try-catch处理async-await
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
let catching = _ => _.then(ret => ret).catch(err => err)
let ret = await catching(:promiseFunction)
```
  