---
layout: note
title: leancloud查询内容包含排除条件
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
// 查找包含 'images' 的对象
query.exists('images');

// 查找不包含 'images' 的对象
query.doesNotExist('images');
```
  