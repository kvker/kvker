---
layout: note
title: 小程序订阅模板前端与nodejs代码示例
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

## 原生前端
```js
// 订阅消息
wx.requestSubscribeMessage({
  tmplIds: ['template_id'],
  success: res => {

  },
  fail: err => {
    console.log({
      err
    })
  },
  complete: async () => {
    // todo...
  }
})
```

## nodejs
```js
const axios = require('axios')
const dayjs = require('dayjs')

const id = 'appid'
const key = 'appkey'

async function getAccessToken() {
  let res = await axios.get(`https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${id}&secret=${key}`)
  // console.log(res.data.access_token)
  return res.data.access_token
}

async function sendSubscribe(openid, name) {
  let access_token = await getAccessToken()
  try {
    let res = await axios.post(`https://api.weixin.qq.com/cgi-bin/message/subscribe/send?access_token=${access_token}`, {
      touser: openid, // openid
      template_id: 'template-id',
      page: 'pages/index/index',
      data: {
        thing2: { // 作品名称
          value: name,
        },
        thing4: { // 分类
          value: '报班',
        },
        thing6: { // 内容简介
          value: '审核通过',
        },
        date5: { // 更新时间
          value: dayjs().format('YYYY/MM/DD HH:mm:ss'),
        },
      },
    })
    return res.data
  } catch(error) {
    return error
  }
}
```
  