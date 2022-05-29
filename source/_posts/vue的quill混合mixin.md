---
layout: note
title: vue的quill混合mixin
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
import Quill from 'quill'
import 'quill/dist/quill.snow.css'

export default {
  data() {
    return {
      readonly: !!this.$route.query.readonly,
      editor: null,
    }
  },
  methods: {
    configEditor(key) {
      let options = {
        readOnly: this.readonly,
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline'],    //加粗，斜体，下划线
            [{ 'indent': '-1' }, { 'indent': '+1' }],  // 缩进
            [{ 'direction': 'rtl' }],  // 文本方向
            [{ 'size': ['small', false, 'large', 'huge'] }],  // 字体大小
            [{ 'color': [] }, { 'background': [] }],   // 字体颜色，字体背景颜色
            [{ 'font': [] }],  //字体
            [{ 'align': [] }],  //对齐方式
            ['image'],
            ['clean'],  //清除字体样式
          ],
        },
        placeholder: '输入内容',
        theme: 'snow'
      }
      // console.log(options)
      this.editor = new Quill(this.$refs.editor, options)
      this.editor.clipboard.dangerouslyPasteHTML(0, this[key].description || this[key].content)
      this.editor.getModule('toolbar').addHandler('image', this.imageHandler)
    },
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
      // console.log({res})
      this.insertToEditor(res.url)
    },
    insertToEditor(url) {
      const range = this.editor.getSelection()
      this.editor.insertEmbed(range.index, 'image', url)
    },
  }
}
```
  