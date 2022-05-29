---
layout: note
title: LeanCloud云函数获取小程序access_token
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
const AV = require('leanengine')
const axios = require('axios')

const id = 'appid'
const key = 'appkey'

AV.Cloud.define('getAccessToken', async req => {
  let res = await axios.get(`https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${id}&secret=${key}`)
  // console.log(res.data.access_token)
  return res.data
})
```

```js
{
  "result": {
    "access_token": "token...",
    "expires_in": 7200
  }
}
```
  