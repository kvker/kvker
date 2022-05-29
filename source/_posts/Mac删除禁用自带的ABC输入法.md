---
layout: note
title: Mac删除禁用自带的ABC输入法
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

1. 备份 ~/Library/Preferences/com.apple.HIToolbox.plist
2. 将当前活跃输入法选为「英文」输入法
3. 终端运行 plutil -convert xml1 ~/Library/Preferences/com.apple.HIToolbox.plist 格式化文件，否则打开乱码
4. 用 vim、sublime text 或者其他编辑器，打开 com.apple.HIToolbox.plist ，删除掉 AppleEnabledInputSources 键下不需要的输入法 dict
5. 右键文件，显示简介，然后锁定。新版本 Mac 系统不锁定会自动检测添加回来。
6. 重启

  