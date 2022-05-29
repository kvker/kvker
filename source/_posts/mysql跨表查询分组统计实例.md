---
layout: note
title: mysql跨表查询分组统计实例
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```sql
select users.openid, log.user_id, log.sum from xxx.users, 
  (
    select user_id, SUM(integral) as sum from xxx.integral_log group by user_id
  ) as log
where log.user_id = users.user_id;
```
  