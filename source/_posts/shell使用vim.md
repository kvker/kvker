---
layout: note
title: shell使用vim
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

1. vi 模式
  `set -o vi`
  > 直接使用命令, 本次 bash shell 有效
  ~/.bashrc 内添加后, 重启 bash shell 或 source ~/.bashrc 后, 永久生效
2. vim 模式
  ```shell
  EDITOR=vim
  export EDITOR
  ```
  > ~/.bashrc 内添加后, 重启 bash shell 或 source ~/.bashrc 后, 永久生效
  