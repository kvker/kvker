---
layout: note
title: 数组内对象去重reduce
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

# 数组内对象去重reduce
```js
let hash={}
let res = arr.reduce((pre, cur) => {
  cur.selected = true
  if(!hash[cur.id]) {
    hash[cur.id] = true
    pre.push(cur)
  }
  return pre
}, [])
```
  