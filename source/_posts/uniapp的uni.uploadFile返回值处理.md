---
layout: note
title: uniapp的uni.uploadFile返回值处理
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

1. 不支持promise模式
2. 返回的data并未JSON序列化，需要手动`JSON.parse(ret.data)`
  