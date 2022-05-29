---
layout: note
title: ES6单例
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```

const STORE = Symbol('foo')

const store = {}

if (!global[STORE]) {
  global[STORE] = store
}

export default global[STORE]
```
  