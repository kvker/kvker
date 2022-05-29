---
layout: note
title: Cordova关于Weex项目示例
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

1. 接入通用代码块
2. 接入vConsole调试
3. 执行回调

cordova.pre.js
```js
;(function () {
  function dynamicLoadJs(url) {
    console.log('cordovaEnv', cordovaEnv)
    const head = document.getElementsByTagName('head')[0]
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = url
    head.appendChild(script)
  }
 
  let u = navigator.userAgent,
    cordovaEnv = null
  ;(href = location.href), (loadUrl = 'http://admp-doc.test.geely.com/lynkco-weex/cordova/')
  if (u.indexOf('x-cordova-platform/android') > -1) cordovaEnv = 'android'
  else if (u.indexOf('x-cordova-platform/ios') > -1) {
    if (u.indexOf('cordova-6') > -1) cordovaEnv = 'ios6'
    else cordovaEnv = 'ios'
  } else cordovaEnv = 'web'
  if (cordovaEnv !== 'web') {
    dynamicLoadJs('https://app-cdn.lynkco.com/cordova/' + cordovaEnv + '/cordova.js')
    document.addEventListener(
      'deviceready',
      function () {
        if (typeof window.LYNKInitForWeb === 'function') window.LYNKInitForWeb()
      },
      false
    )
  } else {
    if (typeof window.LYNKInitForWeb === 'function') window.LYNKInitForWeb()
  }
})()
```

index.js
```js
new VConsole()
     console.log('vConsole')
 
     // Cordova回调
     function LYNKInitForWeb() {
       console.log('Cordova Function Run')
       cordova.exec(
         function (ret) {
           const { accessToken, token } = ret.data
           console.log(JSON.stringify({ accessToken, token }))
         },
         function (error) {
           console.log({ error })
         },
         'SWXUserSessionPlugin',
         'readToken',
         []
       )
     }
```
  