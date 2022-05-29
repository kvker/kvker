---
layout: note
title: quill原生配置
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```html
<div id="editor"></div>
```

```js
let quill = new Quill('#editor', {
  // debug: 'info',
  modules: {
    toolbar: [['bold', 'italic'], ['link', 'image'], [{ 'size': ['small', false, 'large', 'huge'] }],]
  },
  placeholder: '输入新闻内容...',
  theme: 'snow',
})

let toolbar = quill.getModule('toolbar')
toolbar.addHandler('image', imageHandler)

function img2Base64(img) {
  let canvas = document.createElement('canvas')
  canvas.width = img.width
  canvas.height = img.height
  let ctx = canvas.getContext('2d')
  ctx.drawImage(img, 0, 0)
  let base64 = canvas.toDataURL("image/png", 1)
  return base64
}

function imageHandler() {
  const input = document.createElement('input')
  input.setAttribute('type', 'file')
  input.setAttribute('accept', 'image/*')
  input.click()

  // Listen upload local image and save to server
  input.onchange = e => {
    const file = input.files[0]
    $.toast({
      title: "上传中...",
      type: "info",
      delay: 1500
    })
    let img_file = e.target.files[0]
    // console.log(URL.createObjectURL(img_file))
    $("#temp_img").attr('src', URL.createObjectURL(img_file))
    $("#temp_img").on('load', function(e) {
      let base64 = img2Base64(e.target)
      av.uploadBase64(base64).then(file => {
        let range = quill.getSelection()
        quill.insertEmbed(range.index, 'image', file.get('url'))
      })
    })
  }
}
```
  