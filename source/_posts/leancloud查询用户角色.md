---
layout: note
title: leancloud查询用户角色
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
let role = (await this.$avUser.current().getRoles())[0].toJSON()
      switch(role.name) {
        case 'super_admin':
          code = 0
          break
        case 'admin':
          code = 1
          break
        case 'treasurer':
          code = 2
          break
        default:
          alert('你没有权限')
          this.$avUser.logOut()
          this.$$router.replace('/account')
          return
      }
```
  