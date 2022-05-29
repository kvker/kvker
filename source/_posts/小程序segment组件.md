---
layout: note
title: 小程序segment组件
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

## 使用
```json
{
  "usingComponents": {
    "segment": "/components/segment/index"
  }
}
```

```html
<segment bind:switch="switchSegment" list="{{['seg1', 'seg2']}}" current_idx="{{current_segment_idx}}"></segment>
```

## 源码
html
```html
<view class="segment">
  <view wx:for="{{list}}" wx:key="{{index}}" class="{{segment_idx === index ? 'segment-item segment-highlight' : 'segment-item'}}" bindtap="clickSegmentItem" data-idx="{{index}}">{{item}}</view>
</view>
<slot></slot>
```

css
```css
.segment {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.segment-item {
  flex: 1;
  line-height: 64rpx;
  text-align: center;
}

.segment-highlight {
  border-bottom: 4rpx red solid;
}
```

js
```js
Component({
  properties: {
    list: Array,
    current_idx: {
      type: Number,
      value: 0,
    },
  },
  methods: {
    clickSegmentItem(e) {
      let {
        idx
      } = e.currentTarget.dataset
      this.triggerEvent('switch', {
        idx,
      })
    },
  }
})
```
  