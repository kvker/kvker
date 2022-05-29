---
layout: note
title: Vue横向滚动鼠标控制
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
let level_cards
  // 标记可移动
  , move_start
  // 移动初始的x位置
  , move_x
  // 移动初始的容器偏移量
  , move_scroll_left
  // 判断是否为移动, 是则取消原来的点击
  , moved

startMove(e) {
  // console.log(e)
  move_start = true
  move_x = e.clientX
  move_scroll_left = level_cards.scrollLeft
},
move(e) {
  if(move_start) {
    // 位移大于10像素认为是移动
    if(move_x - e.clientX > 10) {
      moved = true
    }
    level_cards.scrollLeft = move_scroll_left + move_x - e.clientX
  }
},
endMove(e) {
  e.stopPropagation()
  move_start = false
},
```
  