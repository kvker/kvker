---
layout: note
title: js获取函数名
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
Function.prototype.getName = function(){

    return this.name || this.toString().match(/function\s*([^(]*)\(/)[1]

}
```
  