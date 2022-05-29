---
layout: note
title: js在web图片转base64
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

## 定义
```js
function img2Base64(img, ext) {
  const canvas = document.createElement("canvas")
  canvas.width = img.width
  canvas.height = img.height
  const ctx = canvas.getContext("2d")
  ctx.drawImage(img, 0, 0, img.width, img.height)
  return canvas.toDataURL("image/" + ext)
}
```

## 调用

```js
let file = $('[name=file]')[0].files[0]
if(file) {
  // 图片url
  let url = window.URL.createObjectURL(file)
  let img = document.createElement('img')
  img.src = url
  img.onload = async e => {
    let base64 = util.img2Base64(e.target)
    $('img').attr('src', base64)
  }
```
  