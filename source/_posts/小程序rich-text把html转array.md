---
layout: note
title: 小程序rich-text把html转array
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

`npm i mini-html-parser2`

## 单纯字符转换

```js
import parse from 'mini-html-parser2'

parse(html_string, (err, nodes) => {
  this.setData({nodes})
})
```

---

**如果牵扯到Markdown，则推荐markdown-it插件，如下：**

## Markdown字符转换
```js
import MarkdownIt from '@/static/libs/markdown-it.min.js' // 或使用npm
const md = new MarkdownIt()

parse(md.render(markdown_string), (err, nodes) => {
  this.setData({nodes})
})
```

---
xxml使用

`<rich-text nodes="{{nodes}}"></rich-text>`
  