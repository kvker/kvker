---
layout: note
title: express获取cookie
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
var Cookies = {}
if (req.headers.cookie != null) {
  req.headers.cookie.split(';').forEach(l => {
    var parts = l.split('=')
    Cookies[parts[0].trim()] = (parts[1] || '').trim()
  })
}
```
  