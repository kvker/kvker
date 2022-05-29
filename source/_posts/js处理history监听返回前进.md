---
layout: note
title: js处理history监听返回前进
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

监听返回前进

```js
window.onpopstate = e => {
  location.href = '/stream/history'
}
```

压入一个链接但不跳转

```js
@状态对象：传给目标路由的信息,可为空
@页面标题：目前所有浏览器都不支持,填空字符串即可
@可选url：目标url，不会检查url是否存在，且不能跨域。如不传该项,即给当前url添加data
window.history.pushState(data, title, targetURL)
```

替换链接但不跳转

```js
@类似于pushState,但是会直接替换掉当前url,而不会在history中留下记录
window.history.replaceState(data, title, targetURL)
```
  