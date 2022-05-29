---
layout: note
title: 常用Util函数
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

import dayjs from 'dayjs'

// 功能函数临时储存器
let doLastTimeout, doLastOperates = []
// 功能函数临时储存器
let doFirstTimeout
// 防抖监控时长
let timeout = 1000

export default {
  /**
   * 使用dayjs格式化日期
   * @param {any} time 时间
   * @param {string} format 定制格式
   */
  formatDate(time, format) {
    return (typeof(time) === 'number' ? dayjs.unix(time) : dayjs(time)).format(format || 'YYYY-MM-DD HH:mm:ss')
  },
  /**
   * 对比今天是明天今天昨天前天等
   * @param {any} time 时间
   */
  formatDateDayByDay(time) {
    const cur = dayjs()
    let diff = dayjs.unix(time).diff(cur, 'day')
    // 为0也可能不超过24小时则为昨天
    if (!diff && !dayjs.unix(time).isSame(cur, 'day')) {
      diff = -1
    }
    if (Math.abs(diff) > 2) {
      const day = dayjs.unix(time).date()
      return {
        day: ~~(day / 10) ? day : `0${day}`,
        month: dayjs.unix(time).month() + 1,
      }
    } else {
      let day
      switch (diff) {
        case 2:
          day = '后天'
          break
        case 1:
          day = '明天'
          break
        case 0:
          day = '今天'
          break
        case -1:
          day = '昨天'
          break
        case -2:
          day = '前天'
          break
      }
      return {
        day,
      }
    }
  },
  /**
   * 同步执行的多个操作，只执行最后一个操作，比如输入内容检索
   * @param {function} operate 传入的操作
   * @param {number} idx (可选)执行特性索引号的操作，一般不会用到
   */
  doLastSync(operate, time = timeout, idx) {
    if (typeof operate !== 'function') {
      throw '执行doLast函数报错：需要传入函数！'
    }
    clearTimeout(doLastTimeout)
    doLastTimeout = setTimeout(() => {
      let lastOperate = doLastOperates[doLastOperates.length - 1]
      lastOperate()
      doLastOperates = []
      clearTimeout(doLastTimeout)
      doLastTimeout = null
    }, time)
    doLastOperates.push(operate)
  },
  /**
   * 异步执行的多个操作，只执行最后一个操作，比如同时多个网络请求返回然后提示消息
   * @param {function} operate 传入的操作
   * @param {number} idx (可选)执行特性索引号的操作，一般不会用到
   */
  doLast(operate, time = timeout, idx) {
    if (typeof operate !== 'function') {
      throw '执行doLast函数报错：需要传入函数！'
    }
    if (!doLastTimeout) {
      doLastTimeout = setTimeout(() => {
        let lastOperate = doLastOperates[doLastOperates.length - 1]
        lastOperate()
        doLastOperates = []
        clearTimeout(doLastTimeout)
        doLastTimeout = null
      }, time)
    }
    doLastOperates.push(operate)
  },
  /**
   * 异步执行的多个操作，只执行第一个操作，比如同时多个网络请求返回然后提示消息
   * @param {function} operate 传入的操作
   * @param {number} idx (可选)执行特性索引号的操作，一般不会用到
   */
  doFirst(operate, time = timeout, idx) {
    if (typeof operate !== 'function') {
      throw '执行doFirst函数报错：需要传入函数！'
    }
    if (!doFirstTimeout) {
      operate()
      doFirstTimeout = setTimeout(() => {
        clearTimeout(doFirstTimeout)
        doFirstTimeout = null
      }, time)
    }
  },
  /**
     * 拷贝文本
     * @params {string} text 需要拷贝的纯文本
     */
    function copyText(text) {
      let input = document.createElement('input')
      input.value = text
      input.style.left = '-1000px'
      document.body.append(input)
      input.select()
      input.setSelectionRange(0, 99999)
      document.execCommand('copy')
      input.remove()
    }
  /**
   * 数字整数部分保持一定长度，不足用0补充，比如时间
   * @params {number} num 传入的数字
   * @params {number} length 数字左侧留着的长度，默认2是作为常用倒计时
   */
  pointLeftNumberLength(num, length = 2) {
    if (typeof(num) === 'number') {
      let numStr = String(num)
      let leftLength = numStr.split('.')[0].length
      if (length > leftLength) {
        let lengthCut = length - leftLength
        let zeroStr = Array.from({
          length: lengthCut
        }, () => '0').join('')
        numStr = zeroStr + numStr
      }
      return numStr
    } else {
      throw '传数字类型!'
    }
  },
  handleError(error) {
    console.log(error)
    uni.showToast({
      title: error.message,
    })
  },
  /**
   * 获取当前页面
   */
  getCurrentPageUrl() {
    const pages = getCurrentPages()
    const currentPage = pages[pages.length - 1]
    const url = `/${currentPage.route}`
    return url
  },
  /**
   * 获取当前页面路径与参数
   */
  getCurrentPageUrlWithArgs() {
    const pages = getCurrentPages()
    const currentPage = pages[pages.length - 1]
    const url = currentPage.route
    const options = currentPage.options
    let urlWithArgs = `/${url}?`
    for (let key in options) {
      const value = options[key]
      urlWithArgs += `${key}=${value}&`
    }
    urlWithArgs = urlWithArgs.substring(0, urlWithArgs.length - 1)
    return urlWithArgs
  },
  /**
   * 返回是或否
   * @param {Number} number 0或1
   */
  yesOrNo(number) {
    return ['否', '是'][number]
  },
}

  