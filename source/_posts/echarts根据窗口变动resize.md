---
layout: note
title: echarts根据窗口变动resize
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
window.onresize = _ => {
  fans_line_chart.resize()
  video_length_pie_chart.resize()
  nice_line_chart.resize()
  article_bar_chart.resize()
  video_publish_bar_chart.resize()
}
```
  