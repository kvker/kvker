---
layout: note
title: 阿里云OSS转云服务器
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
const OSS = require('ali-oss')
const fs = require('fs')
const axios = require('axios')
const mkdirp = require('mkdirp')
const getDirName = require('path').dirname

let client = new OSS({
  accessKeyId: "LTAI4GGHWPuCBkDvWtVRJ8iu",
  accessKeySecret: "aB9mrtVgdVtW6KRnANgXGG4fVOlP6r",
  bucket: "ufu-static",
  region: "oss-cn-shanghai"
})

function getUrlList() {
  let img_objs = []
  getList()

  async function getList() {
    try {
      // 不带任何参数，默认最多返回1000个文件。
      let result = await client.list({
        "max-keys": 1000,
      })
      img_objs = [...img_objs, ...result.objects]
      // 根据nextMarker继续列出文件。
      if(result.isTruncated) {
        await nextList(result.nextMarker)
      }
      let img_urls = img_objs.map(i => i.url)
      let i = 1
      for(const url of img_urls) {
        await saveImg(url, i++)
      }

      async function nextList(nextMarker) {
        let result = await client.list({
          marker: nextMarker,
          "max-keys": 1000,
        })
        img_objs = [...img_objs, ...result.objects]
        if(result.isTruncated) {
          return await nextList(result.nextMarker)
        } else {
          return []
        }
      }

      async function saveImg(url, idx) {
        let ret = await axios.get(url, {
          responseType: 'arraybuffer'
        })
        let path = `public/ufu-static/${url.split('aliyuncs.com/')[1]}`
        return new Promise((resolve, reject) => {
          if(path.endsWith('/')) {
            resolve()
          }
          mkdirp(getDirName(path), (err) => {
            if(err) {
              reject()
            } else {
              fs.writeFile(path, new Buffer(ret.data, 'binary'), (err) => {
                if(err) {
                  console.log(err)
                  reject()
                } else {
                  let progress = `${idx}/${img_objs.length}`
                  console.log(progress)
                  // 写进度
                  fs.writeFileSync(`public/ufu-static/log.txt`, progress)
                  resolve()
                }
              })
            }
          })
        })
      }
    } catch(e) {
      console.log(e)
    }
  }
}

getUrlList()
```
  