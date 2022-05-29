---
layout: note
title: wxs实际意义
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

> 有频繁用户交互的效果在小程序上表现是比较卡顿的，例如页面有 2 个元素 A 和 B，用户在 A 上做 touchmove 手势，要求 B 也跟随移动，movable-view 就是一个典型的例子。一次 touchmove 事件的响应过程为：

> a、touchmove 事件从视图层（Webview）抛到逻辑层（App Service）

> b、逻辑层（App Service）处理 touchmove 事件，再通过 setData 来改变 B 的位置

> 一次 touchmove 的响应需要经过 2 次的逻辑层和渲染层的通信以及一次渲染，通信的耗时比较大。此外 setData 渲染也会阻塞其它脚本执行，导致了整个用户交互的动画过程会有延迟。
  