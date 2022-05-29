---
layout: note
title: VSCode更新权限
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

# VSCode更新权限
`sudo chown -R $USER ~/Library/Caches/com.microsoft.VSCode.ShipIt/`

`xattr -dr com.apple.quarantine /Applications/Visual\ Studio\ Code.app`
  