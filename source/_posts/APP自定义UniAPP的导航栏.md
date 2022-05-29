---
layout: note
title: APP自定义UniAPP的导航栏
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

优先使用形如app-plus

```json
{
      "path": "pages/account/login/login",
      "style": {
        "navigationBarTitleText": "登录/注册",
        "navigationBarBackgroundColor": "#4A83E5",
        "navigationBarTextStyle": "white",
        "app-plus": {
          "titleNView": {
            "backButton": { //自定义 backButton
              "title": "返回"
            }
          }
        },
        "enablePullDownRefresh": false
      }
```
  