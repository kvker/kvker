---
layout: note
title: echarts添加点击事件
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
chart.on('click', param => {
  console.log(param);//这里根据param填写你的跳转逻辑
  console.log(param.dataIndex) 
})
```
  