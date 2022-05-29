---
layout: note
title: mac-emacs快捷键
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

## 直接记录

Ctrl+p shell中上一个命令,或者文本中移动到上一行

Ctrl+n shell中下一个命令,或者 文本中移动到下一行

Ctrl+r 往后搜索历史命令

Ctrl+s 往前搜索历史命令

Ctrl+f 光标前移

Ctrl+b 光标后退

Ctrl+a 到行首

Ctrl+e 到行尾

Ctrl+d 删除一个字符,删除一个字符,相当于通常的Delete键

Ctrl+h 退格删除一个字符,相当于通常的Backspace键

Ctrl+u 删除到行首

Ctrl+k 删除到行尾

Ctrl+l 类似 clear 命令效果

Ctrl+y 粘贴

Ctrl+m 某些操作环境下可以当做回车（item2）

Ctrl+w 某些环境下删除前一个单词(item2)

## 文本移动
移动是最基本的操作之一, 一定要记住 Emacs 快捷键有很多的规律, 要注意举一反三.

字符移动 (右侧为方向按键的模式)

向前 ⌃Backward ←

向后 ⌃Forward →

分词移动 (+⌥Option)

向前 ⌃⌥Backward ⌥←

向后 ⌃⌥Forward ⌥→

行移动

行首 ⌃A (第一个字母) ⌘←

行尾 ⌃End ⌘→

上一行 ⌃Previous ↑

下一行 ^Next ↓

文本选择

相对于之前的移动按住 ⇧Shift, 即可进行文本选择.

删除文本

字符删除

左退格 ⌃H ⌫Backspace(delete)

又退格 ^Delete Fn+⌫Backspace(delete)/DEL

分词删除 (可以结合选择来避开使用 fn/delete)

左词删除 ⌥⌫

右词删除 Fn+⌥⌫

行删除

向左行删除 ^U(仅终端) ⌘⌫

向右行删除 ^Kill

特色操作

字符转置 ^Transpose

插入 ^Insert

向右删除(剪切) ^Kill

行拉取(粘贴) ^Yank
  