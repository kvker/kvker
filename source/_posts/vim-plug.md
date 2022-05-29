---
layout: note
title: vim-plug
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

# 安装 vim-plug
`curl -fLo ~/.vim/autoload/plug.vim --create-dirs https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim`

需要 curl 没有的话单独安装

## 安装插件
```shell
call plug#begin('~/.vim/plugged')
Plug 'itchyny/lightline.vim'
" Plug 其他若干
call plug#end()
```

`:source ~/.vimrc` 在 vim 中重新加载配置

## vim-plug 操作
在 vim 中使用的命令

### 状态
`PlugStatus` 检查现在 plug 负责的插件状态

### 安装
`PlugInstall` 安装配置好的插件

### 更新
`PlugUpdate` 更新已安装的插件

### 清理
`PlugClean` 清理插件，需要先在 .vimrc 里面删除或注释掉

### 升级
`PlugUpgrade` 升级自身
  