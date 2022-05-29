---
layout: note
title: element-ui自定义UI样式最简nuxt使用方案
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

element官方配置下载，解压到static/lib/element下

在nuxt.config.js中，将build内css关掉，然后在head的link中加上lib/element/index.css即可
  