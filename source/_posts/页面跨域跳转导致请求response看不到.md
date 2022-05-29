---
layout: note
title: 页面跨域跳转导致请求response看不到
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
window.onbeforeunload = function() {debugger}
```

或

sources中，添加load断点
  