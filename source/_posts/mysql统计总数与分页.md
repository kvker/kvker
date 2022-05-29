---
layout: note
title: mysql统计总数与分页
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
const sql = `
  SELECT SQL_CALC_FOUND_ROWS * from shiweipapa.pd_tip_off order by time desc limit ${ * 20}, 20;
  SELECT FOUND_ROWS() as total;
`
```
  