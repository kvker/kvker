---
layout: note
title: node-static最简使用
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

实例为leancloud云服务

```js
{
  "dependencies": {
    "node-static": "^0.7.9"
  },
  "scripts": {
    "start": "static . -a 0.0.0.0 -p $LEANCLOUD_APP_PORT"
  }
}
```
  