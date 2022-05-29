---
layout: note
title: leancloud的restful简单封装
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
const LC_USERINFO = 'LC_USERINFO'

const AV = {
  APP_ID: 'RHCvtAra6sl4uPxUrvO0Bimi-gzGzoHsz',
  APP_KEY: 'okKtAADYugPBWeVxoDEpbG9B',
  BASE_URL: "https://rhcvtara.lc-cn-n1-shared.com/1.1",
  USERINFO: uni.getStorageSync(LC_USERINFO) || '',
}

const AV_EXTENDS = {
  CLASS_URL: AV.BASE_URL + '/classes',
}

const requestOption = (hold_loading) => {
  return {
    header: {
      'X-LC-Id': AV.APP_ID,
      'X-LC-Key': AV.APP_KEY,
      'X-LC-Session': AV.USERINFO.sessionToken,
    },
    complete: () => {
      if (!hold_loading) {
        uni.hideLoading()
      }
    },
  }
}

export default {
  /**
   * @param {String} classs 获取所在的class
   * @param {Object} object_id 获取的唯一ID
   */
  get(classs, object_id) {
    return new Promise((resolve, reject) => {
      let url = `${AV_EXTENDS.CLASS_URL}/${classs}/${object_id}`
      uni.request({
        ...requestOption(),
        url,
        method: 'GET',
        success: res => {
          // console.log(res)
          resolve(res.data)
        },
        fail: reject,
      })
    })
  },
  /**
   * @param {String} classs 查询所在的class
   * @param {Object} object_id 查询的唯一ID
   * @param {Object} query_json optional 查询的条件对象
   */
  query(classs, query_json) {
    let query = ''
    for (let key in query_json) {
      if (query_json.hasOwnProperty(key)) {
        let value = query_json[key]
        if (typeof value === 'string') {
          query += `${key}=${value}`
        } else if (value instanceof Array) {
          query += `${key}=${value.join(',')}`
        } else {
          query += `${key}=${JSON.stringify(value)}`
        }
        query += '&'
      }
    }
    let url = `${AV_EXTENDS.CLASS_URL}/${classs}?${query}`
    return new Promise((resolve, reject) => {
      uni.request({
        ...requestOption(),
        url,
        method: 'GET',
        success: res => {
          // console.log(res)
          resolve(res.data.results)
        },
        fail: reject,
      })
    })
  },
  /**
   * @param {String} classs 创建所在的class
   * @param {Object} data 创建的内容对象
   */
  post(classs, data) {
    let url = `${AV_EXTENDS.CLASS_URL}/${classs}`
    return new Promise((resolve, reject) => {
      uni.request({
        ...requestOption(),
        url,
        method: 'post',
        data,
        success: res => {
          // console.log(res)
          resolve(res.data)
        },
        fail: reject,
      })
    })
  },
  /**
   * @param {String} classs 更新所在的class
   * @param {String} object_id 更新的唯一id
   * @param {Object} data 更新的内容对象
   */
  put(classs, object_id, data) {
    let url = `${AV_EXTENDS.CLASS_URL}/${classs}/${object_id}`
    return new Promise((resolve, reject) => {
      uni.request({
        ...requestOption(),
        url,
        method: 'put',
        data,
        success: res => {
          // console.log(res)
          resolve(res.data)
        },
        fail: reject,
      })
    })
  },
  /**
   * @param {String} classs 删除所在的class
   * @param {Object} object_id 删除的唯一ID
   * @param {Object} query_json optional 删除的条件对象
   */
  delete(classs, object_id, query_json) {
    let query = ''
    for (let key in query_json) {
      if (query_json.hasOwnProperty(key)) {
        query += `${key}=${JSON.stringify(query_json[key])}`
      }
    }
    let url = `${AV_EXTENDS.CLASS_URL}/${classs}/${object_id}?${query}`
    return new Promise((resolve, reject) => {
      uni.request({
        ...requestOption(),
        url,
        method: 'delete',
        success: res => {
          // console.log(res)
          resolve(res.data)
        },
        fail: reject,
      })
    })
  },
  /**
   * 批量处理请求，偶尔用在get与delete的query过长情况
   * @param {Object} data {
        "requests": [
          {
            "method": "POST",
            "path": "/1.1/classes/Post",
            "body": {
              "content": "近期 LeanCloud 的文档已经支持评论功能，如果您有疑问、意见或是其他想法，都可以直接在我们文档中提出。",
              "pubUser": "LeanCloud官方客服"
            }
          },
          {
            "method": "POST",
            "path": "/1.1/classes/Post",
            "body": {
              "content": "很多用户表示很喜欢我们的文档风格，我们已将 LeanCloud 所有文档的 Markdown 格式的源码开放出来。",
              "pubUser": "LeanCloud官方客服"
            }
          }
        ]
      }
   */
  // batch(data) {
  //   return new Promise((resolve, reject) => {
  //     uni.request({
  //       ...requestOption(),
  //       url,
  //       data,
  //       method: 'post',
  //       success: res => {
  //         // console.log(res)
  //         resolve(res.data)
  //       },
  //       fail: reject,
  //     })
  //   })
  // },
  /**
   * @param {String} username 账号
   * @param {String} password 密码
   */
  login(username, password) {
    const url = `${AV.BASE_URL}/login`
    return new Promise((resolve, reject) => {
      uni.request({
        ...requestOption(),
        url,
        data: {
          username,
          password
        },
        method: 'post',
        success: res => {
          if (res.data.sessionToken) {
            uni.setStorageSync(LC_USERINFO, res.data)
            AV.USERINFO = res.data
            resolve(res.data)
          } else {
            uni.showModal({
              content: '账密错误',
              showCancel: false,
            })
            reject()
          }
        },
        fail: reject,
      })
    })
  },
  /**
   * 退出登录
   */
  logout() {
    uni.setStorageSync(LC_USERINFO, null)
    AV.USERINFO = ""
  },
  /**
   * 修改用户密码
   * @param {Object} old_password 老密码
   * @param {Object} new_password 新密码
   */
  updatePassword(old_password, new_password) {
    const url = `${AV.BASE_URL}/users/${AV.USERINFO.objectId}/updatePassword `
    return new Promise((resolve, reject) => {
      uni.request({
        ...requestOption(),
        url,
        data: {
          old_password,
          new_password
        },
        method: 'put',
        success: res => {
          if (res.data.sessionToken) {
            resolve(res.data)
          } else {
            uni.showModal({
              content: '密码错误',
              showCancel: false,
            })
            reject()
          }
        },
        fail: reject,
      })
    })
  },

  /**
   * 下面全是功能函数
   */
  currentUser() {
    return AV.USERINFO
  },
  /**
   * 获取构建LC对象
   * @param {String} classs 所属类
   * @param {String} object_id 唯一id
   */
  pointer(classs, object_id) {
    return {
      __type: 'Pointer',
      className: classs,
      objectId: object_id
    }
  },
  /**
   * 获取构建LC对象的用户
   * @param {String} object_id 唯一id
   */
  pointerUser(object_id) {
    return {
      __type: 'Pointer',
      className: '_User',
      objectId: object_id || AV.USERINFO.objectId
    }
  },
}

```
  