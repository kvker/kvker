---
layout: note
title: textarea插入tab等于两个空格处理
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
function keydownTextarea(e) {
  let key_code = e.keyCode
  if(key_code === 9) {
    e.preventDefault()
    let textarea = e.target
    let selection_start = textarea.selectionStart
    let value = textarea.value
    value = value.slice(0, selection_start) + '  ' + value.slice(selection_start)
    textarea.value = value
    textarea.selectionStart = textarea.selectionEnd = selection_start + 2
  }
}
```
  