---
layout: note
title: canvas虚线实例
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
// 绘制虚线
        let dashed_top = summary_top + 120        
        ctx.beginPath()
        ctx.lineWidth = 1
        // 设置间距（参数为无限数组，虚线的样式会随数组循环）
        ctx.setLineDash([2, 4])
        ctx.moveTo(0, dashed_top)
        ctx.lineTo(total_width, dashed_top)
        ctx.strokeStyle = "#d2d2d2"
        ctx.stroke()
        ctx.closePath()
```
  