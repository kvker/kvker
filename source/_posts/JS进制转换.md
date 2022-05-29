---
layout: note
title: JS进制转换
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

0开头八进制，0b开头二进制，0x开头十六进制。

```js
// 十进制转其他
var x=300;  
console.log(x);  
console.log("8进制---"+x.toString(8));  
console.log("32进制---"+x.toString(32));  
console.log("16进制---"+x.toString(16)); 

// 其他转十进制
 var x='300';  
 console.log("2进制转10进制---"+parseInt(x,2));  
 console.log("8进制转10进制---"+parseInt(x,8));  
 console.log("16进制转10进制---"+parseInt(x,16));
```

十进制转其它进制原理

1. 整数与小数部分分开处理
2. 整数除以对应进制值，余数按照小数点左边从右到左顺序填在对应位置上，除第一次是原始数与最后一次0外，其他每次都是用上次的商继续重复本步骤
3. 小数乘以对应进制值，积取整数值（二进制只有0,1，十六进制则有数字和ABCDEF等）按照小数点右边从左到右顺序填在对应位置上，若为0则写0，再次拿小数部分重复本步骤，直到没有小数了或者固定长度四舍五入了。
  