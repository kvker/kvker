---
layout: note
title: XHR实例
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

## GET
get 参数拼接链接后面
```js
var xhr = new XMLHttpRequest()
xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        console.log(JSON.parse(this.response))
    }
}
xhr.open("GET", "/activity/reports/data")
xhr.send()
```
## POST
post 参数要在 send 里面
```js
var xhr = new XMLHttpRequest()
xhr.onreadystatechange = function() {
  if(this.readyState === 4 && this.status === 200) {
    const res = JSON.parse(this.response)
  }
}
xhr.open('post', '/table')
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
//发送请求
xhr.send("page=" + currentPage)
```
  