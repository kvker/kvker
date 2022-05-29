---
layout: note
title: js捕获未处理的reject导致的catch错误
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
window.addEventListener('unhandledrejection', event =>
{
    console.log(event.reason); // 打印"Hello, Fundebug!"
});
 
function foo()
{
    Promise.reject('Hello, Fundebug!');
}
 
foo();
```
  