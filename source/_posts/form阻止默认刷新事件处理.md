---
layout: note
title: form阻止默认刷新事件处理
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

因为早期网页交互模型只能是浏览器提交数据给服务器，服务器做出响应重新返回一个页面，浏览器加载这个页面进行显示。早期前端没有编程式发送网络请求的 API，更没有前端路由管理的概念，所以表单提交跳转页面是广泛接受的方案。

不想刷新可以使用 JS 拦截 form 的 onsubmit 事件，阻止掉浏览器的默认行为，然后用 ajax/fetch 和后台交互。另一个偏方是使用 iframe 作为 form 的 target，不过 JS 处理方面不如让浏览器别管自己全手动发请求来得简单。
  