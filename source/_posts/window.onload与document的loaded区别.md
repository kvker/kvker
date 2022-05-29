---
layout: note
title: window.onload与document的loaded区别
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

只有如下的写法：

```js
document.addEventListener('DOMContentLoaded',function () {
        alert(1)
});

window.onload = function () {
        alert(2)
}
```

分别是dom加载完成, 和 页面资源加载完成（当阻塞资源与非阻塞资源全部加载完才会触发）

显然 window.onload 是比较DOMContentLoaded 要晚触发的。
  