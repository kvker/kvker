---
layout: note
title: new-Date()输出带TZ的标准时间
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

如果是请求使用，直接使用`new Date()`即可。

如果是要本地打印，那么使用如下两个均可：

```js
new Date().toISOString()
new Date().toJSON()
```
  