---
layout: note
title: 优化MySQL的like被%开头的查询
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

`SELECT `column` FROM `table` WHERE POSITION('keyword' IN `filed`)`

`SELECT `column` FROM `table` WHERE POSITION('keyword' IN `filed`)`

`SELECT `column` FROM `table` WHERE INSTR(`field`, 'keyword' )>0 `
  