---
layout: note
title: dpkg安装软件
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

# 在Ubuntu下安装deb包需要使用dpkg命令.

Dpkg 的普通用法：
1. sudo dpkg -i <package.deb>
  安装一个 Debian 软件包，如你手动下载的文件。
2. sudo dpkg -c <package.deb>
  列出 <package.deb> 的内容。
3. sudo dpkg -I <package.deb>
  从 <package.deb> 中提取包裹信息。
4. sudo dpkg -r <package>
  移除一个已安装的包裹。
5. sudo dpkg -P <package>
完全清除一个已安装的包裹。和 remove 不同的是，remove 只是删掉数据和可执行文件，purge 另外还删除所有的配制 文件。
6. sudo dpkg -L <package>
  列出 <package> 安装的所有文件清单。同时请看 dpkg -c 来检查一个 .deb 文件的内容。
7. sudo dpkg -s <package>
  显示已安装包裹的信息。同时请看 apt-cache 显示 Debian 存档中的包裹信息，以及 dpkg -I 来显示从一个 .deb 文件中提取的包裹信息。
8. sudo dpkg-reconfigure <package>
  重新配制一个已经安装的包裹，如果它使用的是 debconf (debconf 为包裹安装提供了一个统一的配制界面)。

如果安装过程中出现问题,可以先使用命令:
`sudo apt-get update`
更新后再执行上面的命令.
  