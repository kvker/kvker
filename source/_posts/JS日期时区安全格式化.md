---
layout: note
title: JS日期时区安全格式化
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
Date.prototype.format = function (utc_offset = 8) {
  const date = new Date((~~(this.getTime() / 1000) + utc_offset * 3600) * 1000)
  return `${date.getFullYear()}/${(date.getMonth() + 1).format()}/${(date.getDate()).format()} ${((date.getHours()) % 24).format()}:${(date.getMinutes()).format()}:${(date.getSeconds()).format()}`
}
```
  