---
layout: note
title: macOS10.15打包windows应用可选方案
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

mac通过homebrew安装wine, 再直接打包win32即可.

wine依赖XQuartz, 这个可以直接官网下载安装, brew有点坑.

###
最新更新, 直接运行即可, packager新版已经支持.
###

```
brew upgrade wine, make sure "/usr/local/bin/wine64" exist
rm -rf ~/.wine
edit "node_modules/rcedit/lib/rcedit.js", change "wine" to "wine64" at line 42
download "https://github.com/electron/rcedit/releases/download/v1.1.1/rcedit-x64.exe", rename to "rcedit.exe" and replace "node_modules/rcedit/bin/rcedit.exe"
```

```
brew install homebrew/cask/wine-stable Then mv /usr/local/bin/wine64 /usr/local/bin/wine

download "https://github.com/electron/rcedit/releases/download/v1.1.1/rcedit-x64.exe", rename to "rcedit.exe" and replace "node_modules/rcedit/bin/rcedit.exe" (Thanks from #51 (comment))
```

download那步似乎可不用
  