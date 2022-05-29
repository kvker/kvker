---
layout: note
title: JS获取图片原始尺寸
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
let _img = new Image()
_img.src = _showimage.src
console.log(_img.width + " " + _img.height)

let _imgSize = {
    width: _showimage.naturalWidth,
    height: _showimage.naturalHeight
}
console.log(_imgSize)
```
  