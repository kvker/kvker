---
layout: note
title: library-not-found-for--libstdc++.6.0.9
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

报错原因：Xcode升级到Xcode10.0后，由于去掉陈旧的libstdc++库替换为libc++，libc++相对是苹果最新版的C++库，经过优化并全面支持C++11

解决方法：

下载libstdc++库，下载链接：链接:https://pan.baidu.com/s/1Fd1kmF1KlFcyP31w0HVDCA  密码:g94n
将 libstdc++、libstdc++.6、libstdc++6.0.9拷贝到Xcode的如下目录：

1.真机环境：/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/SDKs/iPhoneOS.sdk/usr/lib/
2.模拟器环境：/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator.sdk/usr/lib/
  