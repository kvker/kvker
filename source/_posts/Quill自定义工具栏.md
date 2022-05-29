---
layout: note
title: Quill自定义工具栏
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```html
<div id="toolbar">
  <button class="ql-bold"></button>
  <button class="ql-italic"></button>
  <button class="ql-underline"></button>
  <select class="ql-size" style="width: 64px">
    <option value="small">小</option>
    <option selected>正常</option>
    <option value="large">大</option>
    <option value="huge">超大</option>
  </select>
  <button class="ql-list" value="ordered"></button>
  <button class="ql-list" value="bullet"></button>
  <button class="ql-align" value="justify"></button>
  <button class="ql-align" value="center"></button>
  <button class="ql-align" value="right"></button>
  <button class="ql-link"></button>
  <button class="ql-image"></button>
  <button class="ql-video"></button>
</div>
```
  