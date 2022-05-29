---
layout: note
title: pwa的manifest标注
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

标题|功能
-|-
name|用于显示在推荐横幅上与启动画面
short_name|显示在桌面
display|是否显示 Chrome UI，可选 browser
orientation|可选横向 landscape，可不填
start_url|启动进入的页面
theme_color|主题色，用于调整工具栏与 Chrome UI 颜色
background_color|启动时的背景色
icons|48dp 倍数，48x48, 96x96, 14x144, 192x192 自动选取桌面（48 乘以显示倍数）与启动页图标（最接近 128）

* manifest.json
```
{
    "name": "GoTop",
    "short_name": "冲顶大会",
    "display": "standalone",
    "orientation": "landscape",
    "start_url": "/",
    "theme_color": "purple",
    "background_color": "purple",
    "icons": [
      {
        "src": "logo_48.png",
        "sizes": "48x48",
        "type": "image/png"
      },
      {
        "src": "logo_144.png",
        "sizes": "144x144",
        "type": "image/png"
      }
    ]
  }
```
  