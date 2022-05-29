---
layout: note
title: 逆Markdown工具turndown
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

[详细文档](https://www.npmjs.com/package/turndown)

```html
<script src="https://unpkg.com/turndown/dist/turndown.js"></script>
```

```js
var TurndownService = require('turndown')
 
var turndownService = new TurndownService()
var markdown = turndownService.turndown('<h1>Hello world!</h1>')

// or
var markdown = turndownService.turndown(document.getElementById('content'))

```
  