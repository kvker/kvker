---
layout: note
title: class混合对象
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
const mixin = (...sources) => {
  for (const source of sources) {
    for (const key in source) {
      const value = source[key]
      Api.prototype[key] = value
    }
  }
}

mixin(common1, common2, common3, common4)
```
  