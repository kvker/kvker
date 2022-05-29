---
layout: note
title: uniapp拉起live-pusher偶尔失败处理
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
//开始预览
function startPreview(retry) {
  let run = false
  new Promise((resolve, reject) => {
    this.live_pusher.startPreview({
      success: a => {
        // console.log("livePusher.startPreview success:" + JSON.stringify(a))
        if (a.errMsg == 'startPreview:ok' || a.errMsg == 'operateLivePusher:ok') {
          this.camerastate = true //标记相机启动成功
        }
        run = true
        resolve()
      },
      fail: error => {
        // console.log("livePusher.startPreview error:" + JSON.stringify(a))
        run = true
        // 失败的话重新尝试一次
        if (!retry) {
          this.startPreview(true)
        }
        resolve()
      }
    })

    setTimeout(() => {
      // 重试的那次依然没成功, 则抛错提示
      if (retry && !run) {
        reject()
      }
      // 失败的话重新尝试一次
      if (!retry && !run) {
        this.startPreview(true)
      }
    }, 1000)
  }).catch(() => {
    uni.showModal({
      content: '请检查是否授权相机权限, 或返回重试',
      showCancel: false,
    })
  })
}
```
  