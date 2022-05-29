---
layout: note
title: grep命令
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

# 命令
`grep -参数 搜索内容 路径 [排除条件]`
## 参数
*: 表示当前目录所有文件，也可以是某个文件名
-r 是递归查找
-n 是显示行号
-R 查找所有文件包含子目录
-i 忽略大小写

## 排除条件
`--exclude-dir` 排除目录 `--exclude-dir=.git` 或 `--exclude-dir={.git, dist}`
`--exclude` 排除文件 `--exclude=a.doc` 或 `--exclude=x.{doc, ppt}`

  