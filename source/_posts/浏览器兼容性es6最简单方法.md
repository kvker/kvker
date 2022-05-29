---
layout: note
title: 浏览器兼容性es6最简单方法
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

检测是否支持 `type="module"`

```html
<script type="module">
  console.log('support es6 well')
</script>
<script nomodule src="/lib/polyfill.min.js"></script>
<script nomodule src="/js/your.js"></script>
```
  