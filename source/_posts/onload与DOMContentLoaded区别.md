---
layout: note
title: onload与DOMContentLoaded区别
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

DOMContentLoaded又作onDomReady

过程为：

1. DOMContentLoaded，意思是DOM树解析完成
2. （中间穿插img的onload）
3. onload表示所有元素加载完成，包含图片的onload
  