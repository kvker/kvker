---
layout: note
title: JS代理模式HTTP封装
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
import Vue from 'vue'
import common from '@/assets/js/util/common'

let {
  throttle,
  debounce,
  cache,
} = common

const is_dev = process.env.NODE_ENV === 'development'
// TODO: 这里根据环境配置线上测试HOST
const HOST = is_dev ? 'https://aaa.com/api' : 'https://bbb/api'

console.log({
  is_dev,
  NODE_ENV: process.env.NODE_ENV,
  HOST,
})

/**
 * 错误处理
 * @param {*} message 错误文本新车型
 * @param {*} payload 其他载体，自行处理
 * @return
 */
function failHandler(message, payload) {
  const body = {
    frontend: true,
    message,
    ...payload,
  }
  return body
}

function BaseRequest() {
  // 请求统一配置
  this.config = {
    method: 'get',
    timeout: 30000,
    header: {
      Authorization: uni.getStorageSync('userinfo')?.accessToken,
    }
  }
}

/**
 * 开始
 * @return {object} promise 返回一个 promise
 */
BaseRequest.prototype.baseDo = function() {
  is_dev &&
    console.log({
      config: this.config,
    })
  let url = this.config.url
  this.config.url = url.startsWith('http') ? url : HOST + url
  let request = uni
    .request(this.config)
    .then((ret) => {
      let [error, response] = ret
      // 如果是前端拦截到的错误，直接抛出不进then
      if (error) throw error
      let {
        data
      } = response
      if (data && data.status === 200) return data.data
      else {
        let message = ''
        // TODO: 这里配置各种状态码
        switch (data.status) {
          case 40301:
            message = '登录失效'
            uni.removeStorageSync('userinfo')
            setTimeout(() => {
              uni.navigateTo({
                url: '/pages/login/login'
              })
            }, 2000)
            break
          default:
            message = data.message
        }
        Vue.prototype.$toast({
          title: message
        })
        throw new Error(message)
      }
    })
    .catch((error) => {
      // console.error(error)
      let message = error.message || error.errMsg || '网络错误，请联系管理员。'
      Vue.prototype.$toast({
        title: message
      })
      throw new Error(message)
    })
    .finally(() => {
      Vue.prototype.$hideLoading()
    })
  request.$http = this
  return request
}

/**
 * get请求配置
 * @param {string} url 请求地址的 url
 * @return 自身
 */
BaseRequest.prototype.get = function(url) {
  this.config.url = url
  return this
}

/**
 * post请求配置
 * @param {string} url 请求地址的 url
 * @return 自身
 */
BaseRequest.prototype.post = function(url) {
  this.config.method = 'post'
  this.config.url = url
  return this
}

/**
 * 配置请求头
 * @param {object} data 相关参数
 * @return 自身
 */
BaseRequest.prototype.headers = function(data) {
  this.config.header = {
    ...this.config.header,
    ...data,
  }
  return this
}

/**
 * 装载数据
 * @param {object} body 参数
 * @return 自身
 */
BaseRequest.prototype.data = function(body) {
  this.config.data = body
  return this
}

/**
 * 装载数据
 * @param {object} body 参数
 * @return 自身
 */
BaseRequest.prototype.query = function(body = {}) {
  this.config.data = body
  return this
}

/**
 * 装载FormData数据
 * @param {object} body 参数
 * @return 自身
 */
BaseRequest.prototype.formData = function(body = {}) {
  this.config.header['Content-Type'] = 'application/x-www-form-urlencoded'
  let pure_data = {}
  Object.keys(body).forEach((key) => {
    let value = body[key]
    // 空字符串就不传
    if (value) pure_data[key] = value
  })
  this.config.data = pure_data
  return this
}

/**
 * post强行装载query数据
 * @param {object} body 参数
 * @return 自身
 */
BaseRequest.prototype.forceQuery = function(body) {
  const query_string = Object.keys(body).reduce((p, c) => {
    p += `${c}=${body[c]}&`
    return p
  }, '')
  this.config.url += '?' + query_string.slice(0, query_string.length - 1)
  return this
}

/**
 * RESTFUL模式匹配替换请求链接的参数
 */
BaseRequest.prototype.restURL = function(body) {
  this.config.url = this.config.url.template2string(body)
  return this
}

/**
 * 错误码处理 TODO: 待处理错误码
 * @param {number | string} error_code 错误码
 * @return 待处理
 */
BaseRequest.prototype.errorCodeHandler = function(error_code) {
  console.log({
    error_code,
  })
  return 'any'
}

function ProxyRequest() {
  BaseRequest.call(this)
  // 静默状态，即不用弹loading
  this.is_calm = false
  // 其他业务配置参数
  this.extra = {}

  // 是否需要缓存
  this.is_cache = false

  this.timeout = null
  this.throttle_delay = 0
  this.debounce_delay = 0
}

// super夹层，为了防止实例化两次
const Super = function() {}
Super.prototype = BaseRequest.prototype
ProxyRequest.prototype = new Super()
ProxyRequest.prototype.constructor = ProxyRequest

/**
 * 装载其他配置参数
 * @param {object} body 其他参数
 * @return 自身
 */
ProxyRequest.prototype.payload = function(body = {}) {
  this.extra = body
  return this
}

/**
 * 沉默执行
 * @return 自身
 */
ProxyRequest.prototype.calm = function() {
  this.is_calm = true
  return this
}

/**
 * 需要缓存
 * @return 自身
 */
ProxyRequest.prototype.cache = function() {
  this.is_cache = true
  return this
}

/**
 * 节流，市场内执行第一次
 * @param {object} payload 相关参数：{delay: 延时时长}
 * @return
 */
ProxyRequest.prototype.throttle = function(payload) {
  this.throttle_delay = payload.delay || 300
  return this
}

/**
 * 防抖，时长内执行最后一次
 * @param {object} payload 相关参数：{delay: 延时时长}
 * @return
 */
ProxyRequest.prototype.debounce = function(payload) {
  this.debounce_delay = payload.delay || 300
  return this
}

/**
 * 清理缓存
 */
ProxyRequest.prototype.cleanCache = function(payload) {
  cache[this._cacheKey()] = null
  return this
}

/**
 * 缓存key
 * @return 字符串
 */
ProxyRequest.prototype._cacheKey = function() {
  return 'HTTP.' + this.config.url
}

/**
 * 复写代理一些其他操作
 * @return Promise
 */
ProxyRequest.prototype.do = function() {
  console.log(this)
  if (!this.is_calm && !this.is_cache) {
    Vue.prototype.$loading({
      title: this.extra.req_message || '请求中...'
    })
  }

  let cache_key = this._cacheKey(),
    common_key = cache_key

  let result_handler = () => {
    let result
    // 缓存处理方案
    if (this.is_cache) {
      result = cache[cache_key] || (cache[cache_key] = this.baseDo())
    } else {
      result = this.baseDo()
    }
    return result
  }

  if (this.throttle_delay) {
    return throttle.call(this, {
      delay: this.throttle_delay,
      key: common_key + '.throttle',
    }).then(() => result_handler())
  }

  if (this.debounce_delay) {
    return debounce.call(this, {
      delay: this.debounce_delay,
      key: common_key + '.debounce',
    }).then(() => result_handler())
  }

  return result_handler()
}

// 返回新对象是为了避免loading冲突
export default function() {
  return new ProxyRequest()
}
```
  