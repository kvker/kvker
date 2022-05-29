---
layout: note
title: vue-Invalid-Host-header
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

vue.config.js

```js
{
  devServer: {
    port: 4201, // 端口配置
    proxy: {
        // 代理配置
    },
    disableHostCheck: true, // 这是由于新版的webpack-dev-server出于安全考虑，默认检查hostname，如果hostname 不是配置内的，将中断访问。
  } 
}   
```
  