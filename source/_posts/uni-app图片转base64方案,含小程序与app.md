---
layout: note
title: uni-app图片转base64方案,含小程序与app
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

依赖文件

1. upng.js
2. pako.min.js

```js
import upng from '@/libs/upng'
/** 
 * 图片转Base64
 * @param {String} filePath 图片本地路径
 * @param {String} canvasId 小程序时候使用的canvas-id
 */
function img2Base64(filePath, canvasId) {
  return new Promise(resolve => {
    uni.showLoading({
      title: '处理中...',
      mask: true,
      complete() {
        setTimeout(uni.hideLoading, 10000)
      }
    })
    // #ifdef APP-PLUS
    plus.io.resolveLocalFileSystemURL(filePath, entry => {
      entry.file(file => {
        let fileReader = new plus.io.FileReader()
        fileReader.readAsDataURL(file)
        fileReader.onloadend = evt => {
          uni.hideLoading()
          resolve({
            base64: evt.target.result,
          })
        }
      })
    })
    // #endif

    // #ifndef APP-PLUS
    uni.getImageInfo({
      src: filePath,
      success: image => {
        let width = image.width
        let height = image.height
        let canvas = uni.createCanvasContext(canvasId)
        canvas.drawImage(filePath, 0, 0, width, height)
        canvas.draw(false, res => {
          uni.canvasGetImageData({
            canvasId,
            x: 0,
            y: 0,
            width,
            height,
            success: res => {
              let pngData = upng.encode([res.data.buffer], width, height)
              let base64 = 'data:image/png;base64,' + wx.arrayBufferToBase64(pngData)
              uni.hideLoading()
              resolve({
                base64,
              })
            }
          })
        })
      }
    })
    // #endif
  })
}
```
  