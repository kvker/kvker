---
layout: note
title: 解决Safari返回页面缓存问题
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
// 解决Safari返回页面缓存问题
let browser_rule = /^.*((iPhone)|(iPad)|(Safari))+.*$/;
if(browser_rule.test(navigator.userAgent)) {
  window.onpageshow = function(event) {
    if(event.persisted) {
      window.location.reload()
    }
  }
}
```
  