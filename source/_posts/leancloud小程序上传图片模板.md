---
layout: note
title: leancloud小程序上传图片模板
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
wx.chooseImage({
      success: async res => {
        // console.log(res)
        let temp_path = res.tempFilePaths[0]
        let file = await new app.AV.File(temp_path, {
          blob: {
            uri: temp_path,
          },
        }).save()
        if (file) {
          // console.log(file)
          this.setData({
            img_list: [...this.data.img_list, file.get('url')]
          })
        }
        // console.log(this.data.img_list)
      },
    })
```
  