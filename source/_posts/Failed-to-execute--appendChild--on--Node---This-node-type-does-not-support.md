---
layout: note
title: Failed-to-execute--appendChild--on--Node---This-node-type-does-not-support
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

Nuxt部署线上后出现挂掉的bug。

由于ssr生成与client响应不同导致。

`<client-only></client-only>`把报错的部分包裹强行客户端渲染即可。
  