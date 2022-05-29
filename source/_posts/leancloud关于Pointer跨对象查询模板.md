---
layout: note
title: leancloud关于Pointer跨对象查询模板
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
let res = await this.$api.leaveList(q => {
        q.ascending('updatedAt')
        q.include(['user'])
        if(this.search_value) {
          let uq = new this.$avQuery('_User')
          uq.contains('name', this.search_value)
          q.matchesQuery('user', uq)
        }
      })
      // console.log(res)
      if(res) {
        this.list = res
      }
```
  