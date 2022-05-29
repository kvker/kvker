---
layout: note
title: js获取视频宽高（分辨率）
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

注意需要canplay之后才能获取

```js
let video = document.createElement('video')
video.src = URL.createObjectURL(file)
video.addEventListener('canplay', _ => {
  // video.videoWidth, video.videoHeight
)
```

也可以使用oncanplay
  