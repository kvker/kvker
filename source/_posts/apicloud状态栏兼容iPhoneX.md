---
layout: note
title: apicloud状态栏兼容iPhoneX
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
apiready = function() {
    api.setStatusBarStyle({
      style: 'dark'
    })
    header_height = 44 + api.safeArea.top
    // console.log(header_height)
    frame_height = api.winHeight - header_height - tabbar_height - api.safeArea.bottom
    $api.fixStatusBar($api.dom('header'))
    tabbarInit()
    api.openFrame({
      name: 'top_f',
      url: 'widget://html/top_f.html',
      rect: {
        x: 0,
        y: header_height,
        w: api.winWidth,
        h: frame_height
      }
    })
  }
```
  