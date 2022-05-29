---
layout: note
title: 微信小程序最新获取图片base64方法
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
wx.getFileSystemManager().readFile({
  filePath, //选择图片返回的相对路径
  encoding: 'base64', //编码格式
  success: res => { //成功的回调
    uni.hideLoading()
    resolve({
      base64: 'data:image/png;base64,' + res.data,
    })
  }
})
```
  