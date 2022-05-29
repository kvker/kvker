---
layout: note
title: JS的offset
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---


`offsetParent` 该属性返回一个对象的引用，这个对象是距离调用offsetParent的元素最近的（在包含层次中最靠近的），已进行过CSS定位的容器元素。 如果这个容器元素未进行CSS定位, 则offsetParent属性的取值为body元素的引用。 当容器元素的style.display 被设置为 "none"时（译注：IE和Opera除外），offsetParent属性 返回 null。
`top` 该属性一般对用过css定位的元素有效（position为“static”时为auto，不产生效果），定义了一个top属性有效的元素（即定位元素）的上外边距边界与其包含块上边界之间的偏移。
`clientTop` 元素上边框的厚度，当没有指定边框厚底时，一般为0。
`scrollTop` 位于对象最顶端和窗口中可见内容的最顶端之间的距离，简单地说就是滚动后被隐藏的高度。
`offsetTop` 获取对象相对于由offsetParent属性指定的父坐标(css定位的元素或body元素)距离顶端的高度。
`clientHeight` 内容可视区域的高度，也就是说页面浏览器中可以看到内容的这个区域的高度，一般是最后一个工具条以下到状态栏以上的这个区域，与页面内容无关。
`scrollHeight` IE、Opera 认为 scrollHeight 是网页内容实际高度，可以小于 clientHeight。FF 认为 scrollHeight 是网页内容高度，不过最小值是 clientHeight。
`offsetHeight` 获取对象相对于由offsetParent属性指定的父坐标(css定位的元素或body元素)的高度。IE、Opera 认为 offsetHeight = clientHeight + 滚动条 + 边框。FF 认为 offsetHeight 是网页内容实际高度，可以小于 clientHeight。offsetHeight在新版本的FF和IE中是一样的，表示网页的高度，与滚动条无关，chrome中不包括滚动条。
`clientX、clientY` 相对于浏览器窗口可视区域的X，Y坐标（窗口坐标），可视区域不包括工具栏和滚动条。IE事件和标准事件都定义了这2个属性。
`pageX、pageY` 类似于event.clientX、event.clientY，但它们使用的是文档坐标而非窗口坐标。这2个属性不是标准属性，但得到了广泛支持。IE事件中没有这2个属性。
`offsetX、offsetY` 相对于事件源元素（target或srcElement）的X,Y坐标，只有IE事件有这2个属性，标准事件没有对应的属性。
`screenX、screenY` 相对于用户显示器屏幕左上角的X,Y坐标。标准事件和IE事件都定义了这2个属性
  