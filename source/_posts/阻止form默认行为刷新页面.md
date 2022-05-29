---
layout: note
title: 阻止form默认行为刷新页面
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
document.querySelector('#login-container').addEventListener('submit', e => {
      e.preventDefault()
      const email = target.email.value
      const password = target.password.value
    })
```
  