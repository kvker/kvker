---
layout: note
title: fetch封装
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
const http = {
  async request(path, data, args = {}, method = 'GET') {
    let url = path.includes('://') ? path : '/api' + path
    console.log('请求接口: ' + url)
    args.headers = {
      token: global.userinfo.token,
      city: escape(global.userinfo.city),
      'Content-Type': 'application/json',
    }
    if(global.userinfo.town) {
      args.headers.town = escape(global.userinfo.town)
    }
    try {
      const options = {
        method: method,
        ...args,
      }
      if(method === 'GET') {
        if(data) {
          url += Object.keys(data).reduce(function(p, c) {
            p += `${c}=${data[c] || ''}&`
            return p
          }, '?')
          if(data.search_town) {
            args.headers.town = escape(data.search_town)
          }
        }
      } else {
        options.body = JSON.stringify(data)
      }
      const ret = await fetch(url, options)
      const json = await ret.json()
      if(json.code === 200) {
        return json
      } else if(json.code === 401) {
        alert(json.result)
        location.replace('/')
      } else if(json.code === 403) {
        alert(json.result)
      } else {
        alert(json.error || json.msg)
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
  