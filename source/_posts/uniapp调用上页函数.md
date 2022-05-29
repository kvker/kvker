---
layout: note
title: uniapp调用上页函数
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

与小程序有区别，需要$vm

```js
let pages = getCurrentPages()
let mission_page = pages[pages.length - 2]
mission_page.$vm.clickSegmentItem({
  idx: 1,
})
```
  