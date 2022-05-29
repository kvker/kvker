---
layout: note
title: js拦截浏览器刷新、关闭，关联VueRouter的返回
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

mounted或created里面监听beforeunload
```js
window.addEventListener('beforeunload', function (e) {
  e.preventDefault()
  if (editor.txt.html().trim()) e.returnValue = '提示：您尚有未保存的内容，离开本页将丢失编辑内容！' // 这里输入什么都行，不为空就可以，无法定制，这里内容只是前端自己有数
})
```

Router的生命周期直接执行刷新就出发上面一样的提示
```js
beforeRouteLeave(to, from, next) {
  if (editor.txt.html().trim()) {
    next()
    location.reload()
  } else {
    next()
  }
}
```
  