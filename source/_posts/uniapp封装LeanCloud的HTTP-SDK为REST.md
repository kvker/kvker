---
layout: note
title: uniapp封装LeanCloud的HTTP-SDK为REST
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
const header = {
  'X-LC-Id': 's3sELwHfygmjzxQdAn2dhFxB-gzGzoHsz',
  'X-LC-Key': 'ehg5jgYdTmigV4HqnxCWM206',
  'Content-Type': 'application/json',
}

const http = {
  /**
   * @param {Object} classs 查询class
   * @param {Object} query 查询参数
   */
  read(classs, query) {
    return http.request(classs, {
      query,
    }, 'GET')
  },
  /**
   * @param {Object} classs 更新对象的class
   * @param {String} object_id 更新数据对象的id
   * @param {Object} data 更新数据object
   */
  update(classs, object_id, data) {
    return http.request(classs, {
      data,
    }, 'PUT', object_id)
  },
  /**
   * @param {Object} classs 删除对象的class
   * @param {Object} object_id 删除对象的id
   */
  delete(classs, object_id) {
    return http.request(classs, {}, 'DELETE', object_id)
  },
  /**
   * @param {Object} classs 创建数据的class
   * @param {Object} data 创建对象的数据object
   */
  create(classs, data) {
    return http.request(classs, {
      data,
    }, 'POST')
  },
  /**
   * @param {Object} classs 更新class
   * @param {Object} object_id 更新id
   * @param {Object} increment_data {xxx: 1} or {xxx: -1}
   */
  increment(classs, object_id, increment_data) {
    let key = Object.keys(increment_data)[0]
    return http.request(classs, {
      data: {
        [key]: {
          __op: 'Increment',
          amount: increment_data[key],
        }
      }
    }, 'PUT', object_id)
  },
  request(classs, {
    query,
    data
  }, method, object_id) {
    return new Promise((resolve, reject) => {
      uni.request({
        header,
        url: `https://pixivtopapi.ilikecats.cn/1.1/classes/${classs}${(method === 'GET' || method === 'POST') ? '' : `/${object_id}`}`,
        method,
        data: data || query,
        success(ret) {
          resolve(ret.data.results)
        },
        fail(error) {
          reject(error)
        }
      })
    })
  },
  /**
   * @param {String} type 账号函数操作类型, login, logout, regist, forget
   * @param {Object} data {username,password: '123456',email,phone,}
   */
  accountRequest(type = 'login', data) {
    return new Promise((resolve, reject) => {
      uni.request({
        header,
        url: `https://pixivtopapi.ilikecats.cn/1.1/${type === 'login' ? 'login' : 'users'}`,
        method: 'POST',
        data,
        success(ret) {
          if(ret.data.username) {
            let userinfo = ret.data
            uni.setStorage({
              key: 'userinfo',
              data: userinfo,
            })
            resolve(userinfo)
          } else {
            reject(ret.data)
          }
        },
        fail(error) {
          reject(error)
        }
      })
    })
  },
  login(data) {
    return http.accountRequest('login', data)
  },
  regist(data) {
    return http.accountRequest('regist', data)
  },
  logout() {
    uni.removeStorageSync('userinfo')
  },
  currentUser() {
    return uni.getStorageSync('userinfo')
  },
  createCurrentUser() {
    return http.createObject('_User', http.currentUser().objectId)
  },
  /**
   * 工具函数
   */
  createObject(classs, object_id) {
    return {
      __type: "Pointer",
      className: classs,
      objectId: object_id,
    }
  }
}

export default http

```
  