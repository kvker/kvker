---
layout: note
title: js监听横竖屏
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
var evt = "onorientationchange" in window ? "orientationchange" : "resize";
    window.addEventListener(evt,resize,false);
        function resize(fals) {
            if(window.orientation == 0 || window.orientation == 180) {
                    alert("竖屏");
                }else {
                    alert("横屏");
            }
        }
    resize(true)
```
  