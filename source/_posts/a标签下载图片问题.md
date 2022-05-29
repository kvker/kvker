---
layout: note
title: a标签下载图片问题
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

如果链接跨域，会直接href打开，不会下载。

如果需要下载，则要通过canvas转base64然后下载，不过这里有个问题，canvas转base64会有跨域问题，如果服务端允许的情况下，img标签加上`crossOrigin="anonymous"`即可
  