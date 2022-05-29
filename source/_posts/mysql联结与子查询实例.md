---
layout: note
title: mysql联结与子查询实例
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
const sql = `
  SELECT pd_message.msid, pd_message.reply_text, pd_message.receiver_uid, pd_message.ntype, pd_message.reply_id, pd_message.send_utype, pd_message.status, pd_message.ms_time as time,
  pd_user_reply.menu_id, pd_user_reply.reply_text as user_reply_text, pd_user_reply.type as detail_type,
  menu.title, menu.menu_id, menu.cover_img
  FROM shiweipapa.pd_message, shiweipapa.pd_user_reply,
  (SELECT menu_name as title, menu_id, cover_img FROM shiweipapa.pd_menus union select article_name as title, article_id as menu_id, cover_img from shiweipapa.pd_article) as menu
  where pd_message.receiver_uid=${user_id}
  and pd_message.reply_id = pd_user_reply.reply_id
  and menu.menu_id = pd_user_reply.menu_id
  order by ms_time desc limit ${page * 20}, 20;
`
```
  