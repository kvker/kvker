---
layout: note
title: http模板
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
/**
 * author 赵越
 * 2018-11-04
 */

import axios from '@/plugins/axios'
import Vue from 'vue'

/**
 *
 * @param {string} path 请求地址的 path
 * @param {string} data 请求实体
 * @param {object} payload 其他选项
 * @param {object} promise 返回一个 promise
 */
const get = async (path, data, payload = {}) => await request('get', path, data, payload)

/**
 *
 * @param {string} path 请求地址的 path
 * @param {string} data 请求实体
 * @param {object} payload 其他选项
 * @param {object} promise 返回一个 promise
 */
const post = async (path, data = {}, payload = { config: {} }) => {
  let formData = ''
  for(const key in data) {
    if(data.hasOwnProperty(key)) {
      const element = data[key]
      formData += `${key}=${element}&`
    }
  }
  formData = formData.slice(0, formData.length - 1)
  let config = { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } }
  if(payload.config.headers) config.headers = {
    ...config.headers,
    ...payload.config.headers,
  }

  return await request('post', path, formData, { config })
}

/**
 *
 * @param {method} method 请求方法
 * @param {string} path 请求地址的 path
 * @param {string} data 请求实体
 * @param {object} payload 其他选项
 * @param {object} promise 返回一个 promise
 */
const request = async (method, path, data, payload = {}) => {
  let host = ''
  let url = host + path
  let body = {
    url,
    data,
    method,
    params: data,
  }
  if(payload.config) body = {
    ...body,
    ...payload.config,
    params: '',
  }// Object.assign(body, payload.config, { params: '' })

  console.log(`url: ${url}`)
  consoleFormat({ body })

  const res = await axios.request(body)
  let rData = res.data
  if(typeof rData !== 'object') rData = JSON.parse(rData)
  // consoleFormat({ rData })
  if(rData.status === 1) return rData
  else if(rData.status === -99 && !payload.neverLogout) {
    location.href = '/login'
    return
  } else {
    if(!payload.neverLogout) Vue.prototype.$message.error(rData.info)
    return
  }
}

const consoleFormat = obj => {
  const key = Object.keys(obj)[0]
  console.log(key + ':')
  console.dir(obj[key])
  // console.log()
}

Vue.prototype.$get = get
Vue.prototype.$post = post
Vue.prototype.$request = request
let host = `https://dev.test.proginn.com`
// host = `https://www.proginn.com`

export default { get, post, request, host }
```
  