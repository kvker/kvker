---
layout: note
title: ajax关于excel文件导出下载
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

## 返回链接情况

### GET

常规 GET 请求，然后返回地址使用，window.open(res.url) 打开即可。

### POST

同上

## 非返回链接情况
### GET

比上面还要简单点，window.open(url + params) 直接打开即可。

### POST

```js
// 请求时候要添加个字段，比如 axios
option.responseType = 'arraybuffer' // 这个不是放在 headers 里面的
axios(option) // option 里面包含了其他请求

// 返回值处理
const blob = new Blob([response.data], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
const objectUrl = URL.createObjectURL(blob);
const a = document.createElement("a");
document.body.appendChild(a);
a.style = "display: none";
a.href = objectUrl;
a.download = 'Excel数据表';
a.click();
document.body.removeChild(a);
return;
```
  