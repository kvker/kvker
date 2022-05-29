---
layout: note
title: Crypto.JS加密视频
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
let reader = new FileReader()
reader.readAsBinaryString(file)
reader.onloadend = _ => {
  let hash = CryptoJS.SHA224(reader.result).toString()
}
```
  