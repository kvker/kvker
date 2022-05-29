---
layout: note
title: mysql某个时间段内查询用户积分累加处理
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```sql
update shiweipapa.pd_users as users, (SELECT user_id, count(reply_id) as count FROM shiweipapa.pd_user_reply
where approval_time > 1575331200 and approval_time < 1575504000 and reply_text not like"%夹心海苔试吃%"
group by user_id) as reply
set users.integral_total = (users.integral_total + 10 * reply.count)
where users.user_id = reply.user_id;
```
  