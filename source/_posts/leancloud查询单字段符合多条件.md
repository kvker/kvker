---
layout: note
title: leancloud查询单字段符合多条件
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
var q = new AV.Query('Todo')
q.containedIn('priority', [1, 2])
```

反之则是notContainedIn
  