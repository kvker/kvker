---
layout: note
title: JS全屏
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```pug
button#full-screen 全屏
button#exit-full 退出全屏
```

```js
document.querySelector("#full-screen").addEventListener("click", fullScreen)

document.querySelector("#exit-full").addEventListener("click", exitFull)

function fullScreen() {
  var ele = document.documentElement
  var requestFullScreen = ele.requestFullScreen || // W3C
      ele.webkitRequestFullScreen || // Chrome
      ele.mozRequestFullScreen || // Firefox
      ele.msRequestFullScreen // IE11
  if(requestFullScreen) requestFullScreen.call(ele)
}

function exitFull() {
  var exitFullscreen = document.exitFullscreen || //W3C
      document.webkitExitFullscreen || // Chrome IE11
      document.mozCancelFullScreen // Firfox

  if(exitFullscreen) exitFullscreen.call(document)
}
```
  