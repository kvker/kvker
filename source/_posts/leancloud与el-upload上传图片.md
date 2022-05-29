---
layout: note
title: leancloud与el-upload上传图片
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```html
<el-upload
  class="image-uploader"
  action="#"
  :show-file-list="false"
  :before-upload="beforeImageUpload"
>
  <img v-if="form.image" :src="form.image" class="image" />
  <i v-else class="el-icon-plus image-uploader-icon"></i>
</el-upload>
```

```js
async beforeImageUpload(file) {
  console.log(file)
  let res = await this.$http.avUpload(file)
  console.log(this.form.image)
  this.$set(this.form, 'image', res.url)
},
```
  