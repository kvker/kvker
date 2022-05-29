---
layout: note
title: uniapp摄像头权限判断
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
let camera = plus.camera.getCamera()
if (camera && camera.supportedVideoFormats.length) {
  uni.navigateTo({
    url: '/pages/common/shoot_face/shoot_face?need_info=1'
  })
}
```
  