---
layout: note
title: windows鼠标右键添加菜单，如添加VS-Code打开
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

## 右键选中文件打开文件

1, Win+R 打开运行，输入regedit，打开注册表，找到HKEY_CLASSES_ROOT\*\shell分支，如果没有shell分支，则在*下点击右键，选择“新建－项”，建立shell分支。

2, 在shell下新建“VisualCode”项，在右侧窗口的“默认”双击，在数据里输入“用VSCode打开”。这是右键上显示的文字，可以随便写，只是为了方便查看

3, 在“VisualCode”下再新建Command项，在右侧窗口的“默认”键值栏内输入程序所在的安装路径，我的是："D:\[User]\Microsoft VS Code\Code.exe" "%1"。其中的%1表示要打开的文件参数。

4, 配置缩略图。在VisualCode项上新建可扩充字符串值，命名为Icon，双击，把"D:\[User]\Microsoft VS Code\Code.exe"放进数据就可以了。

5, 关闭注册表，即可生效。


## 右键选中文件夹打开文件夹

同上，注册表地址不同：HKEY_CLASSES_ROOT\Directory\shell

## 右键文件夹空白处，打开文件夹

同上，注册表地址不同：HKEY_CLASSES_ROOT\Directory\Background\shell，同时上面的"%1"换成"%V"
  