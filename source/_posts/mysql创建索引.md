---
layout: note
title: mysql创建索引
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

1.添加PRIMARY KEY（主键索引） 

`mysql>ALTER TABLE table_name ADD PRIMARY KEY (column)`

2.添加UNIQUE(唯一索引) 

`mysql>ALTER TABLE table_name ADD UNIQUE (column)`

3.添加INDEX(普通索引) 

`mysql>ALTER TABLE table_name ADD INDEX index_name (column)`

4.添加FULLTEXT(全文索引) 

`mysql>ALTER TABLE table_name ADD FULLTEXT (column)`

5.添加多列索引 

`mysql>ALTER TABLE table_name ADD INDEX index_name (column1, column2, column3)`
  