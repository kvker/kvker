---
layout: note
title: element-UI组件显示中文
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

普通项目在main.js中，nuxt项目在plugins/element-ui.js中：

```js
import Vue from 'vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/zh-CN'

Vue.use(ElementUI, { locale })
```
  