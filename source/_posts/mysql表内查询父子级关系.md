---
layout: note
title: mysql表内查询父子级关系
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```mysql
select pd_user_reply.reply_id, pd_user_reply.pid, pd_user_reply.menu_id, pd_user_reply.reply_images, pd_user_reply.user_id, pd_user_reply.reply_time
, pd_user_reply.reply_text, pd_user_reply.is_show, pd_user_reply.like_num, pd_user_reply.type, pd_user_reply.topic_id from shiweipapa.pd_user_reply
	, (SELECT pd_user_reply.reply_id, pd_user_reply.pid, pd_user_reply.menu_id, pd_user_reply.reply_images, pd_user_reply.user_id, pd_user_reply.reply_time, pd_user_reply.reply_text
	, pd_user_reply.is_show, pd_user_reply.like_num, pd_user_reply.type, pd_user_reply.topic_id, pd_menus.cover_img, pd_menus.menu_name as title 
	FROM shiweipapa.pd_user_reply, shiweipapa.pd_menus
	where pd_user_reply.user_id = 126410 and pd_user_reply.menu_id = pd_menus.menu_id) as reply
where pd_user_reply.pid = reply.reply_id or pd_user_reply.reply_id = reply.reply_id
order by reply.reply_time limit 0, 20;
```
  