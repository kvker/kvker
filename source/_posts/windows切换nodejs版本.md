---
layout: note
title: windows切换nodejs版本
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

**卸载之前的nodejs**

第一步：下载nvm并安装 (推荐使用nvm-setup.zip) 
https://github.com/coreybutler/nvm-windows/releases

第二步：使用nvm命令切换node版本

`nvm`                  // 会提示nvw下的相关命令

`nvm ls`               // 查看已安装node版本

`nvm install vXX`      // 安装对应vXX版本的node

`nvm uninstall vXX`    // 卸载对应vXX版本的node

`nvm use xxx`          // 选择使用XXX版本
  