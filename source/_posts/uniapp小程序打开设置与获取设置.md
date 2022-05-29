---
layout: note
title: uniapp小程序打开设置与获取设置
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
uni.openSetting({
  success(res) {
    console.log(res.authSetting)
  }
})
uni.getSetting({
   success(res) {
      console.log(res.authSetting)
   }
})
```
  