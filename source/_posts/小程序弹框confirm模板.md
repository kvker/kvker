---
layout: note
title: 小程序弹框confirm模板
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

结合mask使用

```html
<mask>
  <view class="confirm-box">
    <view class="title">{{title}}</view>
    <slot></slot>
    <view class="btn main-btn" bindtap="clickConfirm">确定</view>
  </view>
</mask>
```

index 里面设置btn相关
```css
@import "/assets/wxss/index";

.confirm-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 560rpx;
}

.title {
  margin: 50rpx 0 20rpx;
}

.main-btn {
  margin-top: 20rpx;
  border-top: 2rpx solid #e5e5e5; 
}
```

```json
{
  "component": true,
  "usingComponents": {
    "mask": "/components/mask/index"
  }
}
```
  