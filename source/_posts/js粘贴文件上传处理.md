---
layout: note
title: js粘贴文件上传处理
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
function pasteTextarea(e) {
  e.preventDefault()
  let items = e.clipboardData.items
  for(let i = 0; i < items.length; i++) {
    let item = items[i]
    if(item.type.includes("image")) {
      let item = items[i]
      let file = item.getAsFile()
      let file_reader = new FileReader()

      file_reader.readAsDataURL(file)
      file_reader.onload = () => {
        av.upload(file_reader.result).then(ret => {
          e.target.value += `[img](${ret.get('url')})`
        })
      }
    }
  }
}
```
  