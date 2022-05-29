---
layout: note
title: iPhone的Safari返回不刷新
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
if (/(iPhone|iPad|iPod)/i.test(navigator.userAgent)) location.href = document.referrer
else history.go(-1)
```
  