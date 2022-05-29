---
layout: note
title: leancloud云函数笔记
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

## 命令表

key | 作用
 :- | :-
login | 登录 LeanCloud 账号
metric | 当前项目的 LeanStorage 统计信息
info|当前用户、应用
up|启动本地开发调试实例
init|初始化云引擎项目
switch|切换关联的云引擎项目
deploy|部署项目至云引擎
publish|部署至生产环境
upload|上传文件至当前应用（可以在 _File 类中查看）
logs|显示云引擎日志
debug|单独运行云函数调试功能，而不在本地运行项目本身
env|显示当前项目的环境变量
cache|LeanCache 命令行
cql|交互式 CQL

## 参数

```js
AV.Cloud.define('updateUser', req => {
  let user = AV.Object.createWithoutData('_User', req.params.objectId)
  user.set(req.params).save().then(res => {
    // console.log(res)
    return res
  }).catch(err => {
    return
  })
})
```

### Request 会作为参数传入到云函数中，Request 上的属性包括：

params: object：客户端发送的参数对象，当使用 rpc 调用时，也可能是 AV.Object。

currentUser?: AV.User：客户端所关联的用户（根据客户端发送的 X-LC-Session 头）。

sessionToken?: string：客户端发来的 sessionToken（X-LC-Session 头）。

meta: object：有关客户端的更多信息，目前只有一个 remoteAddress 属性表示客户端的 IP。

### 另外，AV.Cloud.define 还接受一个可选参数 options（位置在函数名称和调用函数之间）。 这个 options 对象上的属性包括：

fetchUser: boolean：是否自动抓取客户端的用户信息，默认为真。设置为假时，
Request 将不会有 currentUser 属性。

internal: boolean：是否只允许在云引擎内（使用 AV.Cloud.run 且未开启 remote 选项）或使用 Master Key （使用 AV.Cloud.run 时传入 useMasterKey）调用，不允许客户端直接调用。默认为假。
  