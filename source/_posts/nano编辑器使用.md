---
layout: note
title: nano编辑器使用
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

保存文件Ctrl+O，退出编辑器Ctrl+X，剪切Ctrl+K，粘贴Ctrl+U，搜索Ctrl+W，替换Ctrl+\。

nano有两个常用的启动选项：-w和-m。-w选项是禁止nano自动换行，这个选项在编辑系统配置文件时比较有用，防止因自动换行而对配置文件产生误解。-m选项是启用鼠标支持，开启此选项在使用SSH远程连接时也可以使nano支持鼠标。如果忘记了添加-m选项，在启动nano后也可以通过快捷键Alt+M来启用鼠标支持。
  