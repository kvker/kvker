---
layout: note
title: uniapp小程序主动拉取授权
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
uni.authorize({
    scope: 'scope.userLocation',
    success() {
        uni.getLocation()
    }
})
```
  