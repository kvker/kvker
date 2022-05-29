---
layout: note
title: mysql关于pid类似的递归查询
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```mysql
select t2.*, t3.nickname, t3.avatarurl
from
(
select *, (select concat(reply_id, '/~/', reply_text) from shiweipapa.pd_user_reply where pid = t1.reply_id limit 1) as reply
from shiweipapa.pd_user_reply as t1
where t1.pid = 0
order by reply_time desc limit 0, 20
) as t2, shiweipapa.pd_users as t3
where t2.user_id = t3.user_id;
```
  