---
layout: note
title: PWA-manifest.json最佳实践
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```json
{
  "name": "大前端笔记",
  "short_name": "大前端随笔",
  "display": "standalone",
  "start_url": "index.html",
  "theme_color": "white",
  "background_color": "white",
  "description": "我的个人笔记集合",
  "author": "杭州市滨江区乌斑兔软件设计工作室",
  "developer": "kvker",
  "lang": "zh-CN",
  "scope": "/",
  "orientation": "portrait",
  "iarc_rating_id": "0c8575a0-ea10-48cb-a633-b0e98565b655",
  "categories": ["books"],
  "dir": "auto",
  "prefer_related_applications": true,
  "related_applications": [
    {
      "platform": "microsoft store",
      "url": "https://www.microsoft.com/store/apps/9N1W26GDLBG9",
      "id": "9N1W26GDLBG9"
    }
  ],
  "icons": [
    {
      "src": "static/img/logo.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ],
  "screenshots": [
    {
      "src": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-056e20b6-00c4-4ef4-ba3e-48a87240c51f/acf38670-c83a-44cf-aafe-1e50449ed57f.png",
      "sizes": "2560x1412",
      "type": "image/png"
    },
    {
      "src": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-056e20b6-00c4-4ef4-ba3e-48a87240c51f/8b795feb-ee68-4f14-a2d3-57ca187586fe.png",
      "sizes": "2560x1412",
      "type": "image/png"
    }
  ],
  "shortcuts": [
    {
      "name": "笔记列表",
      "url": "/",
      "description": "我的个人笔记集合",
      "icons": [
        {
          "src": "static/img/logo_96.png",
          "sizes": "96x96",
          "type": "image/png"
        }
      ]
    }
  ]
}
```
  