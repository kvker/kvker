---
layout: note
title: electron-builder无法下载
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

electron-builder 由于网络原因无法下载问题解决
在package.json的build中添加electron的镜像
```json
"electronDownload": {
      "mirror": "https://npm.taobao.org/mirrors/electron/"
}
```
如果还是下载不了相关的包，那么就下载二进制包放进缓存目录，各操作系统包的位置如下：
```
macOS ~/Library/Caches/electron-builder
linux ~/.cache/electron-builder
windows %LOCALAPPDATA%\electron-builder\cache
```
%LOCALAPPDATA% = C:\Users\xxx\Appdata\local
  