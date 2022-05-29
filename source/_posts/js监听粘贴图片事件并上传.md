---
layout: note
title: js监听粘贴图片事件并上传
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
// 某个dom或document或textarea
dom_x.addEventListener('paste', pasteResource)
/**
 * 粘贴资源图片
 */
function pasteResource(e) {
  const items = e.clipboardData.items
  for(let i = 0; i < items.length; i++) {
    let item = items[i]
    if(item.type.includes("image")) {
      let item = items[i]
      const file = item.getAsFile()
      this.upload(file)
    }
  }
}
```
  