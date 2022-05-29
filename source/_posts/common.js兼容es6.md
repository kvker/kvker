---
layout: note
title: common.js兼容es6
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
module.exports = axios;
// Allow use of default import syntax in TypeScript
module.exports.default = axios;
```
  