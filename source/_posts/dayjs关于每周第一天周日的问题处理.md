---
layout: note
title: dayjs关于每周第一天周日的问题处理
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

``js
  let d = dayjs()
  let start_week
  if(d.day()) {
    start_week = d.startOf('week').add(1, 'day').unix()
  } else {
    // 星期天特殊处理
    start_week = d.subtract(6, 'day').startOf('day').unix()
  }
```
  