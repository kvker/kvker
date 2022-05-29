---
layout: note
title: quill原生图片处理
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
imageHandler(e) {
      const input = document.createElement('input')
      input.setAttribute('type', 'file')
      input.setAttribute('accept', 'image/*')
      input.click()

      // Listen upload local image and save to server
      input.onchange = () => {
        const file = input.files[0]

        // file type is only image.
        if(/^image\//.test(file.type)) {
          this.saveToServer(file)
        } else {
          console.warn('You could only upload images.')
          this.$message({
            messgae: '只允许图片',
            type: 'error',
          })
        }
      }
    },
    async saveToServer(file) {
      let res = await this.$http.avUpload(file)
      console.log({res})
      this.insertToEditor(res.url)
    },
    insertToEditor(url) {
      const range = this.editor.getSelection()
      this.editor.insertEmbed(range.index, 'image', url)
    },
```
  