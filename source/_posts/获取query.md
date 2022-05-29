---
layout: note
title: 获取query
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
location.search.substr(1).split('&').reduce((p, c) => {
      let kv = c.split('=')
      if(kv[0]) {
        p[kv[0]] = kv[1]
      }
      return p
    }, {})
```
  