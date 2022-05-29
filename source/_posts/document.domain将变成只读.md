---
layout: note
title: document.domain将变成只读
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

修改document.domain后，iframe便可以通信，但是在Chrome101版本后，将禁止修改document.domain。

替换方案，则是使用postMessage：

```js
// main, https://a.conardli.com
iframe.postMessage('哈喽', 'https://b.conardli.com');

// 接收信息
iframe.addEventListener('message', (event) => {
  // 把不想要的信息过滤掉
  if (event.origin !== 'https://b.conardli.com') return;

  if (event.data === 'succeeded') {
    // 干点别的 ...
  }
});

// iframe, https://b.conardli.com
// 接收信息
window.addEventListener('message', (event) => {
  // 拒绝掉乱七八糟的信息
  if (event.origin !== 'https://a.conardli.com') return;
  
  // 恢复消息
  event.source.postMessage('succeeded', event.origin);
});
```
  