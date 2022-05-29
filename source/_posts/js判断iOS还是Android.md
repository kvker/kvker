---
layout: note
title: js判断iOS还是Android
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
/**
 * 运行设备引擎, 即iOS, Android还是H5
 * 返回值注意大小写
 * @return iOS, Android, H5
 */
function engineType() {
  let ua = navigator.userAgent.toLowerCase()
  if(ua.includes('iphone') || ua.includes('ipad')) {
    return 'iOS'
  } else if(ua.includes('android')) {
    return 'Android'
  } else {
    return 'H5'
  }
}
```
  