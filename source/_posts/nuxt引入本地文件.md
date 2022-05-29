---
layout: note
title: nuxt引入本地文件
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

不需要static前缀

```js
export default {
  head: {
    script: [
      { src: '/js/china.js' },
    ]
  },
}
```
  