---
layout: note
title: vue的update父子传参写法
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

父组件

`<comp :myMessage.sync="bar"></comp>`

子组件

`this.$emit('update:myMessage',val)`
  