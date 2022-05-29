---
layout: note
title: 小程序canvas在组件中绘制失败
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

`const ctx = wx.createCanvasContext('canvas', this)`

同样的, 保存在自定义组件也会出错

```js
wx.canvasToTempFilePath([params], this)
```
  