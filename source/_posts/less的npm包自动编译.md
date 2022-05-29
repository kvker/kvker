---
layout: note
title: less的npm包自动编译
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

搭配使用`less-watch-compiler`包。

`less-watch-compiler source_dir dist_dir [main_file]`

最好是全局安装，避免找不到。

如果是Linux找不到lessc命令，可使用软链接创建一个命令。

```bash
ln -sf /usr/local/lib/nodu_modules/less/bin/lessc /usr/bin/lessc
```
  