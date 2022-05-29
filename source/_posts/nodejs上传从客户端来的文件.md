---
layout: note
title: nodejs上传从客户端来的文件
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

# formidable

```js
// 上传文件
router.post('/upload', async function(req, res, next) {
  const form = formidable({ multiples: true })
  form.parse(req, async (err, fields, files) => {
    if(err) {
      return res.redirect(303, '/error')
    }
    // console.log('received fields:')
    // console.log(fields)
    // console.log('received files:')
    //files里面有上传文件的各种信息
    // console.log(files)
    // console.log(Object.keys(files))
    // key 就是前端提供的 name
    let file_list = await av.upload(Object.keys(files).map(key => files[key]))
    // console.log(file_list)
    res.json(util.success(file_list))
  })
})

```
  