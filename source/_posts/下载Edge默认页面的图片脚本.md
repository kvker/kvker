---
layout: note
title: 下载Edge默认页面的图片脚本
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
const download_a = document.createElement('a')
download_a.href = $('background-image').shadowRoot.querySelector('#backgroundImageNoTheme').style.backgroundImage.split("\"")[1]
download_a.download = 'bg.png'
download_a.click()
```
  