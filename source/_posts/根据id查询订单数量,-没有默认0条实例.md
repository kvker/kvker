---
layout: note
title: 根据id查询订单数量,-没有默认0条实例
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

LEFT JOIN 关键字会从左表 (table_name1) 那里返回所有的行，即使在右表 (table_name2) 中没有匹配的行。

```sql
select users.user_id, nickname, article_num, integral_total, avatarurl, gender, city, reg_time, modified
from shiweipapa.pd_users as users
left join
(SELECT user_id, COUNT(*) AS article_num FROM shiweipapa.pd_user_reply GROUP BY user_id) as reply
on users.user_id = reply.user_id
order by users.user_id desc
limit ${page * size}, ${size};
select count(user_id) as total from shiweipapa.pd_users;
```
  