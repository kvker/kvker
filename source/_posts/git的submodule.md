---
layout: note
title: git的submodule
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

## 新增子模块

* 添加Submodule：

  `git submodule add [git项目地址] [路径名]`

* 初始化 submodule：

  `git submodule init`

* 更新子模块

  `git submodule update`

* 连同子模块一起clone

  `git clone --recurse-submodules <main_project_url>`

## 更新子模块

`git submodule sync` 同步子模块信息, 比如换子模块地址用到

##  删除子模块

`rm -rf [子模块目录]` 删除子模块目录及源码

`vim .gitmodules` 删除项目目录下.gitmodules文件中子模块相关条目

`vim .git/config` 删除配置项中子模块相关条目

`rm -rf .git/modules/xxx/` 删除模块下的子模块目录，每个子模块对应一个目录，注意只删除对应的子模块目录即可

`git rm --cached [子模块名称]` 清除子模块缓存
  