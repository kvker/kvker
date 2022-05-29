---
layout: note
title: JS时间戳
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
//获取时间戳
var timestamp=new Date().getTime()

//时间戳转日期
function getLocalTime(nS) {
   return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');
}
alert(getLocalTime(1293072805));

function getLocalTime(nS) {
    return new Date(parseInt(nS) * 1000).toLocaleString().substr(0,17)
}
alert(getLocalTime(1293072805));

function getLocalTime(nS) {
   return new Date(parseInt(nS) * 1000).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");
}
alert(getLocalTime(1177824835));

function formatDate(now) {
      var year=now.getFullYear();
      var month=now.getMonth()+1;
      var date=now.getDate();
      var hour=now.getHours();
      var minute=now.getMinutes();
      var second=now.getSeconds();
      return year+"-"+month+"-"+date+" "+hour+":"+minute+":"+second;
}

var d=new Date(1230999938);
alert(formatDate(d));
```
  