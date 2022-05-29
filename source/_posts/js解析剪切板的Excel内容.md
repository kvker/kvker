---
layout: note
title: js解析剪切板的Excel内容
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

[转自](https://segmentfault.com/a/1190000021810694)

这次记录的是昨晚一个想法：把excel内容复制到剪切板并转成自己想要的json格式，核心是要把excel内容转json，这部分主要看excel的格式和json如何业务的映射，不展开。倒是通过实践，收获了剪切板的一些知识点。

注：因为只是为了自己的小工具实现，不考虑兼容，在chrome下实践

整个步骤是：

从一封有内容的excel里，选中内容，ctrl+c复制到剪切板（刚好我的内容就是整张表，ctrl+A就可以选中内容）
粘贴到web页面，js监听paste事件，从剪切板对象里获得复制的excel内容（含格式）
将内容解析处理成自己的格式【扩展补充】
这里主要可以分为三点：

1. 粘贴事件和剪切板
document.addEventListener('paste', event => {
    // event里的clipboardData对象
   console.log(event.clipboardData)
})
粘贴事件触发时，可以从event里获取到clipboardData

参考自这里>>

不过里面使用时还用了window.clipboardData，我在chrome和codepen下试验，都没获取到内容。

2. 剪切板里的内容格式
在上一部分的代码打印到控制台，会有个疑惑，就是控制台打出来一个DataTransfer对象，但其实这个对象在控制台展开时属性不是没有值就是空数组，很懵逼。

直到我往里面console属性内容，才找到。

在这个对象里，getData是它的常用方法，用于获取数据内容，它需要接受一个DOMString的参数。

一般常用的是粘贴纯文本，纯文本 getData('text') 即可获得。

但我要的是excel的格式，一开始并不知道excel是啥格式，但是从excel拷贝再粘贴回excel，格式依然保留，所以想着剪切板应该还保留原内容的格式，所以就尝试下。

通过遍历打印出DataTransfer对象的types属性，可以能知晓

document.addEventListener('paste', event => {
      event.clipboardData.types.map(type=>{console.log(type)})
})
types有三个值：text/plain,text/html,Files

于是用types的‘text/html’，和getData一试，果然拿到了带格式的内容，实际上是一段html代码字符串
大致如下

<html  xmlns:o="urn:schemas-microsoft-com:office:office"  xmlns:x="urn:schemas-microsoft-com:office:excel"  xmlns="http://www.w3.org/TR/REC-html40">
<head>
<meta  http-equiv=Content-Type  content="text/html; charset=utf-8">
<style>
...
<table>
...
通过观察得知，想要的内容就是html代码里的table，接下来要转格式就好办了，搞定解析html字符串，用选择器的方式获取单元格内容就差不多了。

3. 如何解析html字符串
这里着实耗费了我不少时间，后面找到了DOMParser,原来原生就支持解析html字符串>>

通过 (new DOMParser()).parseFromString，将字符串转为DOM

const html = event.clipboardData.getData('text/html');
const $doc = new DOMParser().parseFromString(html,'text/html');
// 加载所有的行
const $trs = Array.from($doc.querySelectorAll('table tr'));
于是就可以愉快的querySelectorAll了。

总结
经过一段小探索，完成了自己的需求，收获了三个关键字知识点： clipboardData, DataTransfer, DOMParser。
每个都值得好好挖掘~
  