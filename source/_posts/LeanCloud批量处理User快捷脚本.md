---
layout: note
title: LeanCloud批量处理User快捷脚本
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
this.$api.userList(q => {
      q.equalTo('role', 33)
      q.exists('name')
      q.doesNotExist('address')
      q.limit(1000)
    }, true).then(async res => {
      console.log(res.length)
      let i = 0
      for(const user of res) {
        await this.$api.updateUser({
          objectId: user.get('objectId'),
          role: 44,
        })
        console.log(++i)
      }
    })
```
  