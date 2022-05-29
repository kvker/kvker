---
layout: note
title: axios发送POST类型application-x-www-form-urlencoded
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
axios
.post(
  `https://oauth-login.cloud.huawei.com/oauth2/v3/token`,
  `grant_type=client_credentials&client_id=${app_id}&client_secret=${app_secret}`,
  {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  }
)
.then((ret) => {
  ret.data.current_second = ~~(Date.now() / 1000)
  hw.access_token_instance = ret.data
  return ret.data.access_token
})
.catch(console.error)
```
  