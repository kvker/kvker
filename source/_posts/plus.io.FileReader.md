---
layout: note
title: plus.io.FileReader
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

返回的base64是自带了data:xxxx,的data uri, 如果是百度人脸识别什么的, 需要手动replace掉, 如:

`base64.replace(/^data:image\/\w+;base64,/, '')`
  