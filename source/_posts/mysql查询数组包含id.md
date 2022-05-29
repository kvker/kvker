---
layout: note
title: mysql查询数组包含id
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

`SELECT * FROM Atable WHERE find_in_set(1, [column_name])`
  