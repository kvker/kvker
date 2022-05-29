---
layout: note
title: LeanCloud更新登录信息
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
let res = await app.AV.User.current().set(this.data.form).save()
    // console.log(res)
    app.global.userinfo = res
```
  