---
layout: note
title: CSS指定单独文字设置字体
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```
h1 我爱&CSS

@font-face
	font-family: Me
	src: local('仿宋'), local('Microsoft YaHei UI')
	unicode-range: U+6211
h1
	font-family: Me, 黑体

alert('我'.charCodeAt().toString(16))
```
  