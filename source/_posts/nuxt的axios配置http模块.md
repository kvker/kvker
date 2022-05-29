---
layout: note
title: nuxt的axios配置http模块
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

plugins/axios.js
```js
/**
 * author kvker
 * 2018-11-04
 */
import axios from 'axios'

let http = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 5000, // 请求时间
  // form data处理
  transformRequest: [function(data) {
    let params = ''
    for(const key in data) {
      params += encodeURIComponent(key) + '=' + encodeURIComponent(data[key]) + '&'
    }
    return params
  }],
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

// 添加请求拦截器，server端显示
http.interceptors.request.use(function(config) {
  // 在发送请求之前做些什么
  return config
}, function(error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器，客户端显示
http.interceptors.response.use(function(res) {
  // 对响应数据做点什么
  let data = res.data
  if(data.errCode === 0) {

  }
  // 失败
  else if(data.errCode === 1001) {

  }
  // 跳转到注册
  else if(data.errCode === 1002) {
    Vue.prototype.$router.replace('/register')
  }
  // 重新登陆
  else if(data.errCode === 1003) {
    // togo logout
  }
  else {
    if(!payload.neverLogout) Vue.prototype.$message.error(data.errMsg)
  }
  return data
}, function(error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default http
```

plugins/http.js
```js
/**
 * author 赵越
 * 2018-11-04
 */

import axios from '@/plugins/axios'
import Vue from 'vue'

/**
 *
 * @param {string} url 请求地址的 url
 * @param {string} data 请求实体
 * @param {object} payload 其他选项
 * @return {object} promise 返回一个 promise
 */
const get = async (url, data, payload = {}) => await request('get', url, data, payload)

/**
 *
 * @param {string} url 请求地址的 url
 * @param {string} data 请求实体
 * @param {object} payload 其他选项
 * @return {object} promise 返回一个 promise
 */
const post = async (url, data = {}, payload = {}) => await request('post', url, data, payload)

/**
 *
 * @param {method} method 请求方法
 * @param {string} url 请求地址的 url
 * @param {string} data 请求实体
 * @param {object} payload 其他选项
 * @return {object} promise 返回一个 promise
 */
const request = async (method, url, data, payload = {}) => {
  let config = {
    url,
    method,
  }
  if(method === 'get') {
    config.params = data
  } else {
    config.data = data
  }

  return await axios.request(config)
}

Vue.prototype.$get = get
Vue.prototype.$post = post
Vue.prototype.$request = request

export default { get, post, request }
```
  