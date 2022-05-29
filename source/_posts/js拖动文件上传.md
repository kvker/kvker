---
layout: note
title: js拖动文件上传
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

先禁用浏览器默认事件

```js
document.addEventListener('dragover', e => {
  e.preventDefault()
})
document.addEventListener('drop', e => {
  e.preventDefault()
})
```

然后ondrop

```html
<textarea id="content" placeholder="正文: markdown语法" ondrop="app.dragenterTextarea(event)"></textarea>
```

```js
dragenterTextarea(e) {
  console.log(e.dataTransfer.files)
}
```
  