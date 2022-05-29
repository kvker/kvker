---
layout: note
title: svelte关于fetch一起
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

[关于svelte环境变量](https://kk.kvker.com/arts/detail?id=5eabb07325571c000965e475)

http.js
```js
const { is_dev } = process.env
console.log({ is_dev })
const HOST = is_dev ? 'http://localhost:3002/api' : '/api'

export default {
  async request(path, data, args = {}, method = 'GET') {
    const url = path.includes('://') ? path : HOST + path
    console.log('请求接口: ' + url)
    args.header = {
      token: global.userinfo.token,
      city: escape(global.userinfo.city),
      Accept: 'application/json',
    }
    try {
      const ret = await fetch(url, {
        method: method,
        body: JSON.stringify(data),
        ...args,
      })
      const json = await ret.json()
      if(json.code === 200) {
        return json
      } else {
        alert(json.msg)
        return null
      }
    } catch(error) {
      console.error(error)
      alert(error.message)
    }
  },
  get(path, data, args) {
    return this.request(path, data, args)
  },
  post(path, data, args) {
    return this.request(path, data, args, 'POST')
  },
  put(path, data, args) {
    return this.request(path, data, args, 'PUT')
  },
  delete(path, data, args) {
    return this.request(path, data, args, 'DELETE')
  },
}
```
  