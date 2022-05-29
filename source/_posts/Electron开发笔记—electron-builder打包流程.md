---
layout: note
title: Electron开发笔记—electron-builder打包流程
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

该文章说明基于win平台下，mac及linux没有实验

关于electron-builder打包可以有两种方案：

1. 打包成文件夹及绿色免安装：

electron-builder --dir（依赖winCodeSign）

2.打包成exe的安装包

electron-builder （依赖winCodeSign和nsis）



electron-builder有一些依赖包如 【winCodeSign】、【nsis】；在科学上网的情况下，直接执行命令就会自动处理相关依赖，但天朝基本不科学上网，所以会出现包安装超时等的一些情况，这个时候就需要手动安装：

1.第一步：下载wincodesign包 链接: https://github.com/electron-userland/electron-builder-binaries/releases

2.第二步：选择Source code (zip)下载并解压，里面已经包含nsis

3.第三步：在%LOCALAPPDATA%（C:\Users\Administrator\AppData\Local）目录下新建electron-builder\cache\

4.第四步：将Source code (zip)解压到第三步的目录下，根据错误提示的版本在对于的包下面新建对于的版本，并把文件移动到目录下，便可正常打包，如图：