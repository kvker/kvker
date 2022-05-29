---
layout: note
title: leancloud查询排序
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
// 按 createdAt 升序排列
query.ascending('createdAt');

// 按 createdAt 降序排列
query.descending('createdAt');
```

添加更多排序规则

```js
query.addAscending('priority');
query.addDescending('createdAt');
```
  