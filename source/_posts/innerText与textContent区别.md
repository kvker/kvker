---
layout: note
title: innerText与textContent区别
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

* textContent会获取所有元素的content，包括`<script>`和`<style>`元素
* innerText不会获取hidden元素的content，而textContent会
* **innerText会触发reflow**，而textContent不会
* innerText返回值会被格式化，而textContent不会
  