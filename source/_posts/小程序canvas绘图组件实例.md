---
layout: note
title: 小程序canvas绘图组件实例
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

**注意：**兼容不同尺寸机器，下方数据均使用app.shiftSize(number)

```js
// app.js
App({
  shiftSize: null,
  onLaunch: function (options) {
    wx.getSystemInfo({
      success: ret => {
        // console.log(ret.windowWidth)
        let v = 375 / ret.windowWidth //设计稿尺寸除以  当前手机屏幕宽度
        this.shiftSize = function (w) {
          return w / v
        }
      }
    })
  },
})
```

## wxml

```html
<view class="share-card" catchtouchmove="true">
  <view class="canvas-box">
    <canvas canvas-id='canvas' width="670" height="712" style="width: 670rpx; height: 900rpx; border-radius: 8rpx;overflow: hidden;"></canvas>
    <cover-image src="/images/guanbi.png" mode="aspectFill" class="close" bindtap="doClose">关闭</cover-image>
  </view>
  <view class="btns">
    <view class="btn white-btn" bindtap="doSave">
      <image src="/images/weixin.png" mode="aspectFill"></image>
      <text>保存到相册</text>
    </view>
  </view>
</view>
```

## wxss

```css
.share-card {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99;
}

.canvas-box {
  position: relative;
}

.btns {
  display: flex;
  justify-content: center;
  width: 670rpx;
  margin-top: 40rpx;
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300rpx;
  height: 80rpx;
  border-radius: 37rpx;
  color: white;
  font-family: PingFangSC-Regular;
  font-size: 28rpx;
}

.green-btn {
  background: #21b221;
}

.white-btn {
  border: 2rpx solid #fff;
}

.close {
  position: absolute;
  top: 20rpx;
  right: 20rpx;
  width: 40rpx;
  height: 40rpx;
  color: #333;
  padding: 8rpx;
  font-size: 28rpx;
}

.btn image {
  width: 40rpx;
  height: 40rpx;
  margin-right: 5rpx;
}

```

## js

```js
const app = getApp()
const total_width = 335
const total_height = 450

Component({
  properties: {
    item: Object,
  },
  data: {

  },
  lifetimes: {
    attached() {
      this.downloadImg()
    },
  },
  methods: {
    doClose() {
      this.triggerEvent('close')
    },
    doSave() {
      // console.log('doSave')
      wx.canvasToTempFilePath({
        x: 0,
        y: 0,
        width: total_width,
        height: total_height,
        // 处理导出清晰度问题
        destWidth: total_width * 4,
        destHeight: total_height * 4,
        canvasId: 'canvas',
        success: res => {
          wx.saveImageToPhotosAlbum({
            filePath: res.tempFilePath,
            success: res => {
              wx.showToast({
                title: '保存成功',
              })
            },
            complete() {

            }
          })
        },
        fail: (res) => console.log(res)
      }, this)
    },
    /**
     * 下载网络图片到本地缓存
     */
    downloadImg() {
      const images = this.properties.item.reply_images
      // console.log(this.properties.item)
      if (images && images.length) {
        app.showLoading('下载图片中')
        wx.downloadFile({
          url: images[0].original,
          success: res => {
            console.log(res.tempFilePath)
            this.drawPoster(res.tempFilePath)
          },
          complete: () => {
            wx.hideLoading()
          }
        })
      }
    },
    /**
     * 绘制海报
     */
    drawPoster(main_url) {
      console.log(this.properties.item)
      const item = this.properties.item
      const total_start = 0
      const canvas_width = total_width
      const ctx = wx.createCanvasContext('canvas', this)
      // 绘制背景色
      ctx.setFillStyle('white')
      ctx.fillRect(total_start, total_start, total_width, total_height)

      // 绘制背景图片
      const left = 0
      const top = 0
      const img_width = total_width
      const img_height = 356
      ctx.drawImage('/images/poster.png', left, top, img_width, img_height)

      // 绘制二维码
      const qr_left = 20
      const qr_top = 376
      const qr_width = 60
      ctx.drawImage('/images/qr.jpg', qr_left, qr_top, qr_width, qr_width)

      // 绘制核心图片
      const main_width = 267
      const main_height = 180
      const main_left = 34
      const main_top = 118
      ctx.drawImage(main_url, main_left, main_top, main_width, main_height)

      // 绘制横线
      ctx.rect(0, img_height, img_width, 1)
      ctx.setFillStyle('#e5e5e5')
      ctx.fill()

      // 绘制文本
      let font_size = 12
      let initial_left = 120
      let initial_top = 320
      let content = app.util.formatDate(item.reply_times)
      ctx.setFontSize(font_size)
      ctx.setFillStyle('#999')
      // 文本实际总宽度, 这里肯定小于画布宽度, 比如放个日期什么的
      let text_width = 0
      for(let i = 0; i< content.length; i++) {
        text_width += ctx.measureText(content[i]).width
      }
      // console.log(text_width)
      ctx.fillText(content, canvas_width / 2 - text_width / 2, initial_top)

      // 底部固定文本0
      font_size = 16
      initial_left = 90
      initial_top = 400
      content = '跟着拾爸做辅食'
      ctx.setFontSize(font_size)
      ctx.setFillStyle('#333')
      ctx.fillText(content, initial_left, initial_top)

      // 底部固定文本1
      font_size = 12
      initial_top = 424
      content = '超过1000道实用宝宝食谱分享'
      ctx.setFontSize(font_size)
      ctx.setFillStyle('#999')
      ctx.fillText(content, initial_left, initial_top)

      ctx.draw()
    },
  }
})
```

## 调用

wxml

```json
{
  "usingComponents": {
    "share-card": "/components/share_card/index"
  },
}
```

```html
<share-card wx:if="{{share_card_item}}" item="{{share_card_item}}" bind:close="closeShareCard"></share-card>
```

```js
generatePoster(e) {
    const reply_images = e.detail.reply_images || [{}]
    const original = reply_images[0].original
    if (original) {
      reply_images[0].original = original.replace(/http:\/\/shiweipapa-cdn.wpweixin.com/, 'https://qiniu.sweetpapa.cn')
    }
    // console.log(e.detail)
    // return
    this.setData({
      share_card_item: e.detail,
    })
  },
closeShareCard() {
    this.setData({
      share_card_item: null,
    })
  },
```
