---
layout: note
title: JS动态创建命名空间
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

引用自：Object- Oriented JavaScrtipt 一书

```js
var MyApp = {}
MyApp.namespace = function (name) {
  var parts = name.split('.')
  var current = MyApp
  for(var i in parts) {
    if(!current[parts[i]]) {
      current[parts[i]] = {}
    }
    current = current[parts[i]]
  }
}
MyApp.namespace('event')
MyApp.namespace('dom. style')
console.dir(MyApp)
// 上述代码等价于
var MyApp = {
  event: {}, dom:
  {
    style: {}
  }
}
```
  