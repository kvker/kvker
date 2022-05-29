---
layout: note
title: wsl下vim与windows复制粘贴处理
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

将此[插件](static/paste.zip)放入`/C/Windows/System32/`下

wsl内的`~/.vimrc`内追加如下：

```sh
map ;y :!/mnt/c/Windows/System32/clip.exe<cr>u
map ;p :read !/mnt/c/Windows/System32/paste.exe <cr>i<bs><esc>l
map! ;p <esc>:read !/mnt/c/Windows/System32/paste.exe <cr>i<bs><esc>l
```

如果蛋疼不知道怎么复制进入`~/.vimrc`（哈哈哈哈哈哈），如下操作：

`echo '[一行一行的内容]' >> ~/.vimrc`

即可。
  