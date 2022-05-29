---
layout: note
title: input上传图片转base64
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
  async files2base64() {
    const base64_list = []
    document.body.style.opacity = 0.5
    for(const file of this.files) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      await new Promise(s => {
        reader.onload = async e => {
          const base64 = e.target.result
          let ret = await (new AV.File(file.name, {base64: base64.split(',')[1]})).save()
          base64_list.push(ret.get('url'))
          s()
        }  
      })
    }
    document.body.style.opacity = 1
    this.imgs = [...this.imgs, ...base64_list]
  }
}

```
  