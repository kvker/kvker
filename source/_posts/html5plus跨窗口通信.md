---
layout: note
title: html5plus跨窗口通信
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

`wobj.evalJS( js );` wobj 是获取的窗口对象，js 是对应的执行 js 代码字符串，如：

```js
const langchW = webview.getLaunchWebview();
langchW.evalJS('handleStatusColor();');
```
  