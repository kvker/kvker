---
layout: note
title: 全平台支持基础js工具库模板
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
;(function () {
  function Base() {
    // 配置属性
    // 寄生环境
    this.parasitic_envirment = this.getParasiticEnvirment()
    with (this) {
      console.log({ parasitic_envirment })
    }
  }

  // 配置方法

  /**
   * 获取当前宿主环境
   * @returns 当前环境，WEB、H5、MP、APP
   */
  Base.prototype.getParasiticEnvirment = function () {
    let parasitic_envirment = 'WEB'
    if (typeof require) {
      this.event_target = new EventTarget()
      return (parasitic_envirment = 'NODE')
    }
    navigator.userAgent.includes('H5') && (parasitic_envirment = 'H5')
    navigator.userAgent.includes('MP') && (parasitic_envirment = 'MP')
    navigator.userAgent.includes('APP') && (parasitic_envirment = 'APP')
    return parasitic_envirment
  }

  /**
   * 发送事件函数
   * @param {object} payload {event_name, data}
   */
  Base.prototype.sendEvent = function (payload) {
    var event_name = payload.event_name,
      data = payload.data,
      event = new Event(event_name)
    event.data = data
    console.log('sendEvent: ' + JSON.stringify(payload))
    ;(this.event_target || document).dispatchEvent(event)
  }

  function APPEnvirment() {}

  /**
   * @return {promise} 登录约定
   */
  APPEnvirment.prototype.login = function () {
    // 实现APP的登录全流程
    return new Promise((resolve, reject) => {
      resolve({test: 'success'})
    })
  }

  function MPEnvirment() {}

  /**
   * @return {promise} 登录约定
   */
  MPEnvirment.prototype.login = function () {
    // 实现小程序登录的全流程
    return new Promise((resolve, reject) => {
      resolve({test: 'success'})
    })
  }

  // 继承
  function Service() {
    Base.call(this, arguments)
  }

  function EmptyBase() {}
  EmptyBase.prototype = Base.prototype
  Service.prototype = new EmptyBase()

  Service.prototype.login = function (payload) {
    var instance = payload.instance
    instance
      .login()
      .then((data) => {
        this.sendEvent({
          event_name: 'GLSLoginSuucess',
          data,
        })
      })
      .catch((data) => {
        this.sendEvent({
          event_name: 'GLSError',
          data,
        })
      })
  }

  var service = new Service()

  // test
  var mpe = new MPEnvirment()
  var appe = new APPEnvirment()

  service.login({ instance: mpe })
  service.login({ instance: appe })
})()
```
  