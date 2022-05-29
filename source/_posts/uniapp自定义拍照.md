---
layout: note
title: uniapp自定义拍照
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

不需要原生支持，仅使用nvue功能即可，因为要用live-pusher。

```html
<template>
  <view class="page">
    <view class="live-camera" :style="{ top, left, width, height }">
      <!-- #ifdef APP-PLUS -->
      <live-pusher id="live_pusher" ref="live-pusher" mode="FHD" beauty="0" whiteness="0" :aspect="aspect"
        min-bitrate="1000" audio-quality="16KHz" device-position="front" :auto-focus="true" :muted="true"
        :enable-camera="true" :enable-mic="false" :zoom="false"
        :style="{ left: 1, top: 1, width: width - 2, height: height - 2 }">
      </live-pusher>
      <!-- #endif -->

      <cover-image class="face-mask" :style="{ width, height}" src="/static/img/face_mask.png"></cover-image>
    </view>
    <cover-view class="button" :style="{left: button_left, width: button_width}" @click="snapshot"><text
        class="text">拍照</text></cover-view>
  </view>
</template>

<script>
  import api from '@/assets/js/api'
  import {
    pathToBase64
  } from '@/assets/lib/image_tools'

  export default {
    data() {
      return {
        aspect: '2:3', //比例
        top: 0,
        left: 0,
        button_left: 0,
        button_width: 0,
        width: '', //屏幕可用宽度
        height: '', //屏幕可用高度
        camerastate: false, //相机准备好了
        live_pusher: null, //流视频对象
        snapshot_url: null, //快照
      }
    },
    onLoad(e) {
      // #ifdef APP-NVUE
      this.initCamera()
      // #endif
    },
    onReady() {
      // #ifdef APP-NVUE
      this.live_pusher = uni.createLivePusherContext('live_pusher', this)
      this.startPreview() //开启预览并设置摄像头
      // #endif
    },
    methods: {
      //初始化相机
      initCamera() {
        uni.getSystemInfo({
          success: (res) => {
            this.top = 16
            this.width = 342
            this.height = 360
            this.left = (res.windowWidth - 342) / 2
            this.button_width = 311
            this.button_left = (res.windowWidth - 311) / 2
            let zcs = this.aliquot(this.width, this.height)
            this.aspect = (this.width / zcs) + ':' + (this.height / zcs)
          }
        })
      },
      //整除数计算
      aliquot(x, y) {
        if (x % y == 0) return y
        return this.aliquot(y, x % y)
      },
      //开始预览
      startPreview() {
        this.live_pusher.startPreview({
          success: a => {
            if (a.errMsg == 'startPreview:ok' || a.errMsg == 'operateLivePusher:ok') {
              this.camerastate = true //标记相机启动成功
            }
          }
        })
      },
      //停止预览
      stopPreview() {
        this.live_pusher.stopPreview({
          success: a => {
            this.camerastate = false //标记相机未启动
          }
        })
      },
      //返回
      back() {
        uni.navigateBack()
      },
      //抓拍
      snapshot() {
        this.live_pusher.snapshot({
          success: e => {
            this.snapshot_url = e.message.tempImagePath
            this.stopPreview()
            this.setImage()
            // uni.navigateBack()
          }
        })
      },
      //设置
      setImage() {
        uni.$emit('shoot_face_page', {
          file_path: this.snapshot_url
        })
        uni.navigateBack({

        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .page {
    height: 1400rpx;
  }

  .face-mask {
    position: absolute;
  }

  .button {
    position: absolute;
    top: 1000rpx;
    height: 88rpx;
    color: black;
    background-color: #4A83E5;
    border-radius: 16rpx;
  }

  .text {
    color: #ffffff;
  }

  .test-view {
    position: absolute;
    top: 20rpx;
    left: 0;
    width: 400rpx;
    height: 400rpx;
  }
</style>
```
  