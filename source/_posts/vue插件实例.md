---
layout: note
title: vue插件实例
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

## 实例
```js
export default {
  install: (Vue, options) => {
    Vue.prototype.$reqHost = 'https://beta.007vin.com'
  }
}
```

## 开发
```js
MyPlugin.install = (Vue, options) => {
    // 1. 添加全局方法或属性
    Vue.myGlobalMethod = function () {
      // 逻辑...
    }
    // 2. 添加全局资源
    Vue.directive('my-directive', {
      bind (el, binding, vnode, oldVnode) {
        // 逻辑...
      }
      ...
    })
    // 3. 注入组件
    Vue.mixin({
      created: function () {
        // 逻辑...
      }
      ...
    })
    // 4. 添加实例方法
    Vue.prototype.$myMethod = function (methodOptions) {
      // 逻辑...
    }
  }
```

## 使用
`Vue.use(MyPlugin)`

  