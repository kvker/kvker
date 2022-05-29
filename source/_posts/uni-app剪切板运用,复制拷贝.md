---
layout: note
title: uni-app剪切板运用,复制拷贝
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
uni.setClipboardData({
    data: 'hello',
    success: function () {
        console.log('success');
    }
})

uni.getClipboardData({
    success: function (res) {
        console.log(res.data);
    }
})
```
  