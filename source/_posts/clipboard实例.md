---
layout: note
title: clipboard实例
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
div id="container-info">
    <span id="address">零零汽网址：https://007vin.com/</span>
    <span id="username">账号：13812341234 （手机号码）</span>
    <span id="password">密码：341234 （手机后6位）</span>
</div>

<input type="button" id="copy" value="复制文字" data-clipboard-target="#container-info" />

<script src="/ppy/js/clipboard.min.js"></script>

var clipboard = new ClipboardJS('#copy');

clipboard.on('success', function(e) {
    alert("复制成功！")
    e.clearSelection()
})

clipboard.on('error', function(e) {
    alert("复制失败，请手动拷贝！")
})
```
  