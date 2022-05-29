---
layout: note
title: input获取文件图片本地路径
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
const image = e.target.files[0];
const reader = new FileReader();
const url = reader.readAsDataURL(image);
reader.onload = e => {
  const url = e.target.result;
  console.log(url); // base64
}
```
  