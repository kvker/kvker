---
layout: note
title: react项目js修改绑定元素实例
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
let old_value = temp1.value
temp1.value = 123123
// 下面这行为了input事件触发diff，必须
temp1._valueTracker.setValue(old_value)
let event = new Event('input', {bubbles: true})
temp1.dispatchEvent(event)
```
  