---
layout: note
title: leancloud的请求封装
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
// import AV from 'leancloud-storage'

if(!(AV.applicationId && (AV.applicationKey || AV.masterKey))) {
  AV.init({
    appId: "xxx",
    appKey: "yyy",
    serverURLs: "https://a.b.com"
  })
}

window.av = {
  AV: AV,
  /**
   * 批量创建
   * @param {array} objects
   */
  createAll: function(objects) {
    return AV.Object.saveAll(objects)
  },
  /**
   * 批量删除
   * @param {array} objects
   */
  deleteAll: function(objects) {
    return AV.Object.destroyAll(objects)
  },
  /**
   * 批量更新
   * @param {array} objects
   */
  updateAll: function(objects) {
    return AV.Object.fetchAll(objects)
  },
  /**
   * 批量保存
   * @param {array} objects
   */
  saveAll: function(objects) {
    try {
      return AV.Object.saveAll(objects)
    } catch(err) {
      wx.showToast({
        title: err.message,
      })
    }
  },
  /**
   * av新增对象
   * @param {string} classs 新增对象的类
   * @param {object} params 新增参数
   */
  create: function(classs, params) {
    try {
      return (new (AV.Object.extend(classs))).set(params).save()
    } catch(err) {
      wx.showToast({
        title: err.message,
      })
    }
  },
  /**
   * av基础获取
   * @param {string} classs 搜索类名
   * @param {function} cbForQuery 设置查询条件的中介函数
   */
  read: function(classs, cbForQuery) {
    var query = new AV.Query(classs)
    // 如果需要额外设置条件，则通过传入这个函数处理
    if(cbForQuery) {
      // 如果是组合搜索，替换处理
      var temp_q = cbForQuery(query)
      if(temp_q) {
        query = temp_q
      }
    }
    return query.find()
  },
  /**
   * av更新对象
   * @param {string} classs 更新对象的类
   * @param {string} id 更新对象的objectId
   * @param {object} params 更新内容
   */
  update: function(classs, id, params) {
    var obj = AV.Object.createWithoutData(classs, id)
    // 设置属性
    for(var key in params) {
      if(params.hasOwnProperty(key)) {
        var element = params[key]
        obj.set(key, element)
      }
    }
    return obj.save()
  },
  /**
   * av删除对象
   * @param {string} classs 删除对象的类
   * @param {string} id 删除对象的objectId
   */
  delete: function(classs, id) {
    var obj = AV.Object.createWithoutData(classs, id)
    return obj.destroy()
  },
  /**
   * 上传资源文件
   * @param {string} pat 文件路径
   */
  upload(base64, filename = new Date().getTime() / 1000 + '.png') {
    return new AV.File(filename, {
      base64,
    }).save()
  },
  /**
   * 上传小程序资源文件
   * @param {string} pat 文件路径
   */
  uploadMpFile(path) {
    return new AV.File(path, {
      blob: {
        uri: path,
      },
    }).save()
  },
  /**
   * 上传资源文件
   * @param {string} pat 文件路径
   */
  uploadBase64: function(base64, file_name) {
    if(!file_name) {
      file_name = dayjs.valueOf() + '.png'
    }
    return new AV.File(file_name, { base64: base64 }).save()
  },
  /**
   * av基础获取数量
   * @param {string} classs 搜索类名
   * @param {function} cbForQuery 设置查询条件的中介函数
   */
  count: function(classs, cbForQuery) {
    var query = new AV.Query(classs)
    // 如果需要额外设置条件，则通过传入这个函数处理
    if(cbForQuery) {
      cbForQuery(query)
    }
    return query.count()
  },
  /**
   * 登录
   */
  login: function(username, password) {
    return AV.User.logIn(username, password)
  },
  /**
   * 退出
   */
  logout: function() {
    this.AV.User.logOut()
  },
  /**
   * 注册
   */
  regist: function(username, password) {
    // 创建实例
    var user = new AV.User();

    // 等同于 user.set('username', 'Tom')
    user.setUsername(username);
    user.setPassword(password);
    return user.signUp()
  },
  /**
   * 获取当前用户
   */
  currentUser: function() {
    return AV.User.current()
  },
}
```
  