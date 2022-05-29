---
layout: note
title: vue修改当前路由query实例
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

# vue修改当前路由query实例
```js
watch: {
  '$route'(to, from) {
    this.handleRouteParams()
  }
},
methods: {  
  changeRoute() {
    this.$router.replace({
      query: {q1, q2}
    })
  },
}
```
  