---
layout: note
title: canvas文字居中换行
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
function drawText({ ctx, content, canvas_width, text_line_width, line_height, top }) {
              const texts = content.split('')
              const line_text_list = []
              let init_width = 0
              let init_list = []
              let gap_height = 0 // 上下间距
              // 按照满行分组
              for (const text of texts) {
                if (!gap_height) gap_height = line_height - ctx.measureText(text).height
                const width = ctx.measureText(text).width
                init_list.push({ text, width })
                init_width += width
                init_list.line_width = init_width // 给init_list加个总字宽标记
                if (init_width > text_line_width) {
                  init_width = 0
                  let text_list = [...init_list]
                  text_list.line_width = init_list.line_width
                  line_text_list.push(text_list)
                  init_list = []
                }
              }

              let text_list = [...init_list]
              text_list.line_width = init_list.line_width
              line_text_list.push(text_list)

              let line_count = 0
              for (const text_list of line_text_list) {
                let line_width = text_list.line_width
                let text_width = 0
                for (const { text, width } of text_list) {
                  ctx.fillText(text, (canvas_width - line_width) / 2 + text_width, top + line_count * line_height)
                  text_width += width
                }
                line_count++
              }
            }
```
  