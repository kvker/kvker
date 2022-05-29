---
layout: note
title: nodejs存base64上传的图片
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
var base64Data = imgData.replace(/^data:image\/\w+;base64,/, "");
console.log(base64Data);
var dataBuffer = new Buffer(base64Data, 'base64');
fs.writeFile("image.png", dataBuffer, function(err) {
  if(err) {
    res.send(err);
  } else {
    res.send("保存成功！");
  }
})
```
  