---
layout: note
title: js字符串转base64
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
//字符串转base64
function encode(str){
// 对字符串进行编码
var encode = encodeURI(str);
// 对编码的字符串转化base64
var base64 = btoa(encode);
return base64;
}
 
// base64转字符串
function decode(base64){
// 对base64转编码
var decode = atob(base64);
// 编码转字符串
var str = decodeURI(decode);
return str;
}
```
  