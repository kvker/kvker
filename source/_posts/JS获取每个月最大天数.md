---
layout: note
title: js获取每个月最大天数
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

# js获取每个月最大天数

[转载自](https://www.cnblogs.com/hualuyao/p/4561068.html)

js可以Date对象很方便的获取到每月的天数，在初始化Date对象时，我们可以通过这种方式:

```js
let d = new Date(2015,2,0)
console.log(d.getDate())
```

以上代码可以在控制台输出2015年2月份的天数

> Date对象月份从0开始，即0表示1月份，以此类推。
>
> 在上面的代码中，我们初始化d为三月份的第0天，由于JavaScript中day的范围为1~31中的值，所以当设为0时，会向前 一天，也即表示上个月的最后一天。
>
> 通过这种方式可以得到每个月份的天数，也不同区分闰年了，很方便.

可以写个这样的函数，如下：
```js
function mGetDate(year, month){
  let d = new Date(year, month, 0)
  return d.getDate()
}
```
在使用时传入想要获取的年份和月份即可，如下:

`let totalDay = mGetDate(2004,2) //29`
  