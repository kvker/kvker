---
layout: note
title: vue-quill-editor与element-ui实现上传图片功能
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```html
<el-upload
  style="display: none;"
  action="/api/admin/cert/uploadImg"
  :show-file-list="false"
  :on-success="handleEditorImgSuccess"
  :before-upload="beforeAvatarUpload"
>
  <el-button ref="chooseEditorImg" slot="trigger" size="small" type="primary">选取文件</el-button>
</el-upload>
```
```js
// 插入图片或其他元素到编辑器的位置
let addRange = { index: 0 }

mounted() {
  setTimeout(() => {
    this.editor.getModule('toolbar').addHandler('image', this.imageHandle)
  }, 1000)
},
methods: {
  /**
   * 编辑图图片上传成功
   */
  handleEditorImgSuccess(res, file) {
    let url = res.data.file_url_abs
    this.editor.insertEmbed(addRange.index, 'image', url)
  },
  /**
   * 点击编辑器图片按钮事件
   * @param {boolean} state 一个不知道什么的状态
   */
  imageHandle(state) {
    if(state) {
      addRange = this.editor.getSelection()
      console.log({ addRange })
      this.$refs.chooseEditorImg.$el.click()
    }
  },
}
```
  