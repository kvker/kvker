---
layout: note
title: 查询P站图片源处理
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
// 查询P站图片源处理
    wx.chooseImage({
      success(res) {
        const tempFilePaths = res.tempFilePaths
        wx.showLoading({
          title: '上传中...',
        })
        wx.uploadFile({
          url: "https://saucenao.com/search.php", //仅为示例，非真实的接口地址
          filePath: tempFilePaths[0],
          name: 'file',
          formData: {},
          success(res) {
            let data = res.data
            let ret_name = data.match(/resulttitle"><strong>.+?<\/strong/g)
            let title = ret_name[0] ? ret_name[0].replace(/.*resulttitle"><strong>(.+)<\/strong.*/, '$1') : ''
            // console.log(title)
            let ret = data.match(/class="linkify">(\d+)</g)
            // console.log(ret[0] ? ret[0].replace(/.*>(\d+)</, '$1') : '')
            let id = ret[0] ? ret[0].replace(/.*>(\d+)</, '$1') : ''
            let url = 'https://www.pixiv.net/artworks/' + id
            if(id) {
              wx.showModal({
                title,
                content: url,
                confirmText: '拷贝',
                success(ret) {
                  if(ret.confirm) {
                    wx.setClipboardData({
                      data: url,
                    })
                  }
                }
              })
            }
          },
          complete() {
            wx.hideLoading({
              complete: (res) => {},
            })
          }
        })
      }
    })
```
  