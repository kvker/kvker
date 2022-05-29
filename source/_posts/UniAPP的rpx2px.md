---
layout: note
title: UniAPP的rpx2px
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

官方rpx2px`uni.upx2px([rpx])`

自制px2rpx

```js
function px2rpx(px) {
  return px/(uni.upx2px(100)/100)
}
```

  