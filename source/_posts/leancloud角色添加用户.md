---
layout: note
title: leancloud角色添加用户
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
// 检测是否已经有角色定位,避免重复添加
        let has_in_role = (await http.avRead('_Role', q => {
          q.equalTo('code', 4)
          q.equalTo('users', AV.User.current())
        }, 1))[0]
        // console.log({ has_in_role })
        // 如果没有则创建角色
        if (!has_in_role) {
          let souce_role = (await http.avRead('_Role', q => {
            q.equalTo('code', 4)
          }, 1))[0]
          if (souce_role) {
            let role_users = souce_role.getUsers()
            role_users.add(AV.User.current())
            await souce_role.save()
          }
        }
```
  