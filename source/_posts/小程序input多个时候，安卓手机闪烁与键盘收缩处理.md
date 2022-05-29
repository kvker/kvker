---
layout: note
title: 小程序input多个时候，安卓手机闪烁与键盘收缩处理
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

首先使用textarea处理安卓上的问题，即textarea替代input，注意css有改动才能实现。

如果改动后，iOS适配也出现问题，则直接复制一个文件即可，通过device判断机型进入不同页面。

如：

/pages/form/form

复制一个

/pages/form_android/form_android

通过如下代码判断

```js
switch (wx.getSystemInfoSync().platform) {
  case 'android':
    uni.navigateTo({
      url: '/pages/form_android/form_android?share_link=' + this.share_link,
    })
    break;
  default:
    uni.navigateTo({
      url: '/pages/form/form?share_link=' + this.share_link,
    })
    break;
}
```
  