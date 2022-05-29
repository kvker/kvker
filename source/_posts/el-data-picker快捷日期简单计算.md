---
layout: note
title: el-data-picker快捷日期简单计算
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
:picker-options="pickerOptions"

const oneDaySeconds = 3600 * 1000 * 24

pickerOptions: {
  shortcuts: [
    {
      text: '今天',
      onClick(picker) {
        const date = new Date()
        const end = date
        const start = date.getTime() - oneDaySeconds
        picker.$emit('pick', [start, end])
      }
    },
    {
      text: '昨天',
      onClick(picker) {
        const date = new Date()
        const end = date.getTime() - oneDaySeconds
        const start = date.getTime() - oneDaySeconds * 2
        picker.$emit('pick', [start, end])
      }
    },
    {
      text: '本周',
      onClick(picker) {
        const date = new Date()
        const weekday = date.getDay() || 7
        const end = date.getTime()
        date.setDate(date.getDate() - weekday + 1)
        const start = date.getTime()
        picker.$emit('pick', [start, end])
      }
    },
    {
      text: '上周',
      onClick(picker) {
        const date = new Date()
        const weekday = date.getDay() || 7
        date.setDate(date.getDate() - weekday + 1)
        const end = date.getTime()
        date.setDate(date.getDate() - 7)
        const start = date.getTime()
        picker.$emit('pick', [start, end])
      }
    },
    {
      text: '最近一周',
      onClick(picker) {
        const date = new Date()
        const end = date
        const start = date.getTime() - oneDaySeconds * 7
        picker.$emit('pick', [start, end])
      }
    },
    {
      text: '本月',
      onClick(picker) {
        const date = new Date()
        const end = date.getTime()
        date.setDate(1)
        const start = date.getTime()
        picker.$emit('pick', [start, end])
      }
    },
    {
      text: '上月',
      onClick(picker) {
        const date = new Date()
        date.setDate(1)
        const end = date.getTime() - oneDaySeconds
        const start = end - oneDaySeconds * 30
        picker.$emit('pick', [start, end])
      }
    },
    {
      text: '最近一个月',
      onClick(picker) {
        const date = new Date()
        const end = date
        const start = date.getTime() - oneDaySeconds * 30
        picker.$emit('pick', [start, end])
      }
    },
    {
      text: '最近三个月',
      onClick(picker) {
        const date = new Date()
        const end = date
        const start = date.getTime() - oneDaySeconds * 90
        picker.$emit('pick', [start, end])
      }
    }
  ]
}
```
  