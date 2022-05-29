---
layout: note
title: vim粘贴大文本卡死
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

如果是系统内粘贴（非远程鼠标那种），则可以使用`"+p`与`"*p`粘贴即可。

全兼容的方案，`set paste`进入粘贴模式，然后insert模式粘贴，之后看情况是否需要退出粘贴模式`set nopaste`。

可以使用键盘映射快捷键`set pastetoggle=<F5>`将paste模式切换放到F5快捷键上。
  