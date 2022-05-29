---
layout: note
title: 小程序canvas绘图实例
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

新版本

```html
<canvas type="2d" class="draw-canvas" id="draw_canvas" style="width: 200px; height: 200px;"></canvas>
```

```js
clickDrawCanvas() {
      new Promise(resolve => wx.createSelectorQuery()
        .select('#draw_canvas')
        .fields({
          node: true,
          size: true,
        })
        .exec(ret => {
          const canvas = ret[0].node
          const ctx = canvas.getContext('2d')
          resolve({ canvas, ctx })
        })).then(({ canvas, ctx }) => {
          let totalStart = 0
          let totalWidth = 200
          // 绘制背景色
          console.log(ctx)
          ctx.fillStyle = 'white'
          ctx.fillRect(totalStart, totalStart, totalWidth, totalWidth)

          const img = canvas.createImage()
          img.src = 'https://636c-cloud1-8gr7pjiyfb5eb535-1305405351.tcb.qcloud.la/img/bg.jpg?sign=6c495ee0eeb8c2b551908e755361de05&t=1641533317'
          img.onload = () => {
            // 绘制图片
            let left = 25
            let top = 10
            let imgWidth = 250
            let imgHeight = 130
            ctx.drawImage(img, left, top, imgWidth, imgHeight)

            // 绘制文本
            let fontSize = 12
            let initialLeft = 0
            let initialTop = 20
            ctx.fontSize = fontSize
            ctx.fillStyle = '#000'
            ctx.fillText('长按扫码加我名片', initialLeft, initialTop)

            let width = imgWidth
            wx.canvasToTempFilePath({
              x: 0,
              y: 0,
              width,
              height: width,
              destWidth: width,
              destHeight: width,
              canvas,
              success: (res) => {
                this.setData({
                  imagePath: res.tempFilePath,
                  actionSheetHidden: true,
                  posterShow: true
                })
              },
              fail: (res) => console.log(res)
            })
          }
        })
    },
```
老版本

```html
<!-- 不在屏幕内 -->
<canvas canvas-id='posterCtx' style="position: fixed;left: -200%;top: 0;width: 300px; height: 300px;"></canvas>
```

```js
/**
   * 保存图片
   */
  clickSave() {
    wx.saveImageToPhotosAlbum({
      filePath: this.data.imagePath,
      success: res => {
        wx.showToast({
          title: '保存成功',
        })
        this.setData({
          posterShow: false,
        })
      },
      complete() {

      }
    })
  },
/**
   * 绘制海报
   */
  drawPoster(imageBase64) {
    let totalStart = 0
    let totalWidth = 300
    let ctx = wx.createCanvasContext('posterCtx')
    // 绘制背景色
    ctx.setFillStyle('white')
    ctx.fillRect(totalStart, totalStart, totalWidth, totalWidth)

    // 绘制图片
    let left = 25
    let top = 10
    let imgWidth = 250
    let imgHeight = 130
    ctx.drawImage('/assets/imgs/poster_text.png', left, top, imgWidth, imgHeight)

    let qrWidth = 100
    let qrLeft = 100
    let qrTop = 150
    ctx.drawImage(imageBase64, qrLeft, qrTop, qrWidth, qrWidth)

    let fingerWidth = 40
    let fingerLeft = 70
    let fingerTop = 250
    ctx.drawImage('/assets/imgs/finger.png', fingerLeft, fingerTop, fingerWidth, fingerWidth)

    // 绘制文本
    let fontSize = 12
    let initialLeft = 120
    let initialTop = 276
    ctx.setFontSize(fontSize)
    ctx.setFillStyle('#000')
    ctx.fillText('长按扫码加我名片', initialLeft, initialTop)

    ctx.draw(false, () => {
      let width = 600
      wx.canvasToTempFilePath({
        x: 0,
        y: 0,
        width: width,
        height: width,
        destWidth: width,
        destHeight: width,
        canvasId: 'posterCtx',
        success: (res) => {
          this.setData({
            imagePath: res.tempFilePath,
            actionSheetHidden: true,
            posterShow: true
          })
        },
        fail: (res) => console.log(res)
      })
    })
  },

// 调用，这里传的是 base64
this.drawPoster(res.image)
```
  