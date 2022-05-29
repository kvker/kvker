---
layout: note
title: js原生追加元素方法
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

element.insertAdjacentElement(position, el)

element.insertAdjacentHTML(position, html_str)

element.insertAdjacentText(position, text)

## position

属性|说明
-|-
beforebegin | 元素自身的前面
afterbegin | 插入元素内部的第一个子节点之前
beforeend | 插入元素内部的最后一个子节点之后
afterend | 元素自身的后面
  