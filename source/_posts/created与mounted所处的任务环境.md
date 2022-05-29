---
layout: note
title: created与mounted所处的任务环境
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
created() {
  console.log(1)
  new Promise((resolve) => {
    console.log(4)
    resolve(5)
  }).then(val => {
    console.log({val})
  })
  this.getTree(
    {
      categoryStatus: 1,
    },
    () => {
      console.log(3)
      if (this.$route.query.id) {
        this.getDetail(this.$route.query.id)
      }
    }
  )
},
mounted() {
  console.log(2)
  this.configEditor()
},
```

输出为：1,4,2,5,3

可见，created与mounted在同一个宏任务中，promise的then挂在这个宏任务后面，最后才是异步延时队列处理。
  