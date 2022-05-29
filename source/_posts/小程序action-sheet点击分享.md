---
layout: note
title: 小程序action-sheet点击分享
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```html
<action-sheet hidden="{{actionSheetHidden}}" bindchange="hiddenActionSheet">
  <action-sheet-item>
    <button open-type="share" style='color: black;font-size: 32rpx;'>分享给微信好友/群</button>
  </action-sheet-item>
  <action-sheet-item style='font-size: 32rpx;'>生成海报图片分享</action-sheet-item>
  <action-sheet-cancel>取消</action-sheet-cancel>
</action-sheet>
```

```js
data: {
  actionSheetHidden: true,
},

/**
 * 隐藏 action-sheet
 */
hiddenActionSheet() {
  this.clickShare();
},

/**
 * 点击分享我的名片
 */
clickShare() {
  this.setData({
    actionSheetHidden: !this.data.actionSheetHidden
  });
},
```
  