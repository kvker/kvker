---
layout: note
title: JS正则groups
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

命名分组：`/(?<gName>regexp)/` 语法是 ?<gName>

获取方式：

replace: `replace(/(g1)(g2)/), '$<g1>$<g2>'`
match、exec: `match(/(g1)(g2)/)` 在返回值的 groups 里面有相应的键值对，分组本身在返回值数组的索引 1 开始排序，索引 0 永远是匹配原值
  