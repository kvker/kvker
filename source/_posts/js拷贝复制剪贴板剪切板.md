---
layout: note
title: js拷贝复制剪贴板剪切板
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

## 最新方案
```js
navigator.clipboard.writeText(location.protocol + '//' + location.hostname + path).then(ret => {
  window.open(path)
})
```

Clipboard 继承自 EventTarget 接口，因此拥有它的方法。

read()

从剪贴板读取数据（比如图片），返回一个 Promise 对象。When the data has been retrieved, the promise is resolved with a DataTransfer object that provides the data。

readText()

从操作系统读取文本；returns a Promise which is resolved with a DOMString containing the clipboard's text once it's available。

write()

写入任意数据至操作系统剪贴板。This asynchronous operation signals that it's finished by resolving the returned Promise。

writeText()

写入文本至操作系统剪贴板。returning a Promise which is resolved once the text is fully copied into the clipboard。


## IE方案

```js
let input = document.createElement('input')
input.style.position = 'fixed'
input.style.left = '-1000px'
input.style.top = '0'
document.body.append(input)
input.value = location.href + '/share_progress/' + this.current_item.id
input.select()
// Infinity无效
input.setSelectionRange(0, 9999)
document.execCommand('copy')
```
  