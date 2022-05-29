---
layout: note
title: 阿里云OSS前端直传
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

**注意: oss直传request与global对象冲突**

```html
<script src="http://gosspublic.alicdn.com/aliyun-oss-sdk-6.9.0.min.js"></script>
```

```js
let client = new OSS({
  accessKeyId: 'xxx',
  accessKeySecret: 'yyy',
  // secure: true,
  bucket: 'ufu-static',
  region: 'oss-cn-shanghai'
})

const input = document.createElement('input')
input.setAttribute('type', 'file')
input.setAttribute('accept', 'image/*')
input.click()

// Listen upload local image and save to server
input.onchange = e => {
  const file = input.files[0]
  let img_file = e.target.files[0]
  // console.log(URL.createObjectURL(img_file))
  let file_subffix = img_file.name.match(/\.(.*$)/g)[0] || ''
  let file_name = 'img/' + new Date().getTime() + file_subffix
  console.log(file_name)
  client.put(file_name, img_file).then(ret => {
    // console.log(ret.url)
    // 下面换成自己的处理逻辑, 这里是富文本编辑器的实例代码
    let range = quill.getSelection()
    quill.insertEmbed(range.index, 'image', ret.url)
  }).catch(console.error)
}
```
  