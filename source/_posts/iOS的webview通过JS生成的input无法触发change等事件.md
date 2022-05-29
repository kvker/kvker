---
layout: note
title: iOS的webview通过JS生成的input无法触发change等事件
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

iOS的webview需要createElement后将其添加到页面上，如`document.body.appent(input)`，之后才会响应事件。
  