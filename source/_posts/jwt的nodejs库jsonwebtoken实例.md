---
layout: note
title: jwt的nodejs库jsonwebtoken实例
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

## 简单封装

```js
const jwt = require('jsonwebtoken')
const private_key = 'private_key'

module.exports = {
  /**
   * 加密
   * @param {any} data 加密数据
   * @param {string|number} time 加密时长, 默认30天
   */
  encrypt(data, time = '30d') {
    return jwt.sign(data, private_key, { expiresIn: time })
  },
  /**
   * 解密
   * @param {string} token 需要解密的密文
   */
  decrypt(token) {
    try {
      let data = jwt.verify(token, private_key)
      return {
        token: true,
        data: data
      }
    } catch(e) {
      return {
        token: false,
        data: e
      }
    }
  }
}
```

## 使用

```js
router.get('/encrypt', (req, res, next) => {
  let ret = jwt.encrypt({
    username: 'aaa',
    password: 'bbb'
  })
  res.json(util.success(ret))
})

router.get('/decrypt', (req, res, next) => {
  let ret = jwt.decrypt(req.query.token)
  res.json(util.success(ret))
})
```
  