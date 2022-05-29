---
layout: note
title: express设置session
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
var session = require('express-session')

// 使用 session 中间件
app.use(session({
  secret :  'secret', // 对session id 相关的cookie 进行签名
  resave : true,
  saveUninitialized: false, // 是否保存未初始化的会话
  cookie : {
      maxAge : 1000 * 60 * 3, // 设置 session 的有效时间，单位毫秒
  },
}))

//判断session 状态，如果有效，则返回主页，否则转到登录页面
if(req.session.userName){

}

// 清除session
req.session.userName = null
```
  