---
layout: note
title: Android安卓修改分辨率
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```shell
adb shell wm size # 查看分辨率
adb shell wm size 720*1280 # 修改分辨率
adb shell wm size reset # 还原分辨率
adb shell wm density # 查看像素密度
adb shell wm 240 # 修改像素密度
adb shell wm density reset # 还原像素密度
```
  