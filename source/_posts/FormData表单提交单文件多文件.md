---
layout: note
title: FormData表单提交单文件多文件
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
const form_data = new FormData()
for (const file of resultFiles) {
  form_data.set('file', file) // 单文件或覆盖
  form_data.append('file', file) // 多文件叠加
  form_data.set('other_param', xxx)
}
// upload
// content-type: multipart/form-data
```
  