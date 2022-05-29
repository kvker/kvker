---
layout: note
title: 小程序canvas文本居中
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

## 单行

```js
let text_width = 0
for(let i = 0; i< content.length; i++) {
  text_width += ctx.measureText(content[i]).width
}
console.log(text_width)
ctx.fillText(content, canvas_width / 2 - text_width / 2, initial_top)
```

## 多行

```js
// 绘制文本
      let font_size = 14
      let initial_left = 120
      let initial_top = 320
      let content = this.properties.item.goods.base.name
      ctx.setFontSize(font_size)
      ctx.setFillStyle('#333')
      let textWidth = 218
      let canvasWidth = 255
      let lineWidth = 0
      let line = 0
      for (let i = 0; i < content.length; i++) {
        const single_width = ctx.measureText(content[i]).width
        if (lineWidth < textWidth) {
          ctx.fillText(content[i], canvasWidth / 2 - textWidth / 2 + lineWidth, 300 + 20 * line)
          lineWidth += single_width
        } else {
          lineWidth = 0
          line++
        }
      }
```
  