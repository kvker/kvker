---
layout: note
title: 关于URL的hash一些知识
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

window.location.hash这个属性可读可写。读取时，可以用来判断网页状态是否改变；写入时，则会在不重载网页的前提下，创造一条访问历史记录。

onhashchange是HTML5的新监听，对于老浏览器，可是使用setTimeInterval来处理hash的变化。

Google抓取#的机制
1. 默认情况下，Google的网络蜘蛛忽视URL的#部分。
2. 但是，Google还规定，如果你希望Ajax生成的内容被浏览引擎读取，那么URL中可以使用"#!"，Google会自动将其后面的内容转成查询字符串_escaped_fragment_的值。
3. 比如，Google发现新版twitter的URL如下：
`http://twitter.com/#!/username`
就会自动抓取另一个URL：
`http://twitter.com/?_escaped_fragment_=/username`
  