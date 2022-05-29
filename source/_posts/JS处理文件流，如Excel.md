---
layout: note
title: JS处理文件流，如Excel
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
axios：设置返回数据格式为blob或者arraybuffer
如：
    var instance = axios.creat({ ... //一些配置
        responseType: 'blob', //返回数据的格式，可选值为arraybuffer,blob,document,json,text,stream，默认值为json
    })
请求时的处理：
　　getExcel().then(res => {
    　　//这里res.data是返回的blob对象
    　　var blob = new Blob([res.data], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8'}); //application/vnd.openxmlformats-officedocument.spreadsheetml.sheet这里表示xlsx类型
    　　var downloadElement = document.createElement('a');
    　　var href = window.URL.createObjectURL(blob); //创建下载的链接
    　　downloadElement.href = href;
    　　downloadElement.download = 'xxx.xlsx'; //下载后文件名
    　　document.body.appendChild(downloadElement);
    　　downloadElement.click(); //点击下载
    　　document.body.removeChild(downloadElement); //下载完成移除元素
    　　window.URL.revokeObjectURL(href); //释放掉blob对象
　})
```
  