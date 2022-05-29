---
layout: note
title: vim命令
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

## 系统提供教程：终端命令 vimtutor

### 提高效率：

`vim +n filename` 打开文件跳转的指定行数

`vim +/xx filename` 打开文件，跳转到含有内容的行

### 浏览
功能 | 按键
- | -
下个词头 | w
上个词头 | b
下个词尾 | e
上个词尾 | ge
下个字串 | W
上一页 | ctrl + b
下一页 | ctrl + f
行首 | 0
行尾 | $
行首非空 | ^
行尾非空 | g_
文档首 | [[
文档尾 | ]]
置顶 | zt
居中 | zz
置底 | zb
之前位置 | \`\`
前往定义 | `gd` 

### 注释

#### 多行注释

`ctrl + v` 进入 visual block 模式，选中多行注释行

`I` 大写进入行首编辑模式，输入 `//` 或 `#`，之后按两次 `ESC` 完成，多行注释清除

`ctrl + v` 进入 visual black 模式，选中多行的 `//` 或 `#`，按 `d` 清除即可


### 编辑
`I` 句首插入

`A` 句尾插入

`cw` 删除到下个单词前并插入

`J` 下一行并入本行

`:saveas` 另存为

`:bn, :bp` 打开上个文件或下个文件

`gU, gu` 变大写或变小写

### 提高效率
`:set ai` 开启自动对齐（缩进）

`r` 替换指定位置的字符，不会进入插入模式

`R` 替换模式

`s` 删除当前字符后插入，也很常用

`:e` 刷新文件

`gg=G` 代码全部对齐

### 搜索选中
按下 `v` 之后，可以任意移动光标来使光标经过的区域的文本处于可视化选中状态。

按下 `y`，把选中的内容复制到VIM内部的默认寄存器 " 中。

按下 `/` 或 `?`，进入搜索状态。

按下`Ctrl-R`，然后按下 "，把寄存器 " 中的内容粘贴到搜索栏中。（Ctrl-R？）

最后，按下“回车”，执行搜索。

### 删除

`x` 或 `dl` 删除当前字符

`X` 或 `dh` 删除前一字符

`d]]` 删除至文档末尾

`dw` 删除到下一个单词开头

`de` 删除到本单词末尾

`dE` 删除到本单词末尾包括标点在内

`db` 删除到前一个单词

`dB` 删除到前一个单词包括标点在内

`J` 删除本行的回车符（CR），并和下一行合并

`dt"` 删除所有内容直到 `"`

### 拷贝粘贴

`yw` 拷贝一个单词　　

`yy` 拷贝一行

`nyy` 拷贝n行

`"+y` 复制 1 行到操作系统的粘贴板

`"+nyy` 复制 n 行到操作系统的粘贴板

`yG` 拷贝到文章末尾

`y1G` 拷贝到文章开头

`"xnyy` 拷贝n行给变量x(任意字母)，非常喜欢的功能，输出函数可以拷贝成p，这样不会不用当前复制了一段别的东西，还有回去复制输出了

`:reg` 拷贝给哪个变量不记得了就可以用查看信息的命令

`C-r 0` 编辑时粘贴

`vmap <C-x> :!pbcopy<CR>` 快捷键复制

`vmap <C-c> :w !pbcopy<CR><CR>` 快捷键粘贴

`vmap "+y :w !pbcopy<CR><CR>` Mac 配置与 Linux 一样复制

`nmap "+p :r !pbpaste<CR><CR>` Mac 配置与 Linux 一样粘贴

#### 拷贝选择的多行

`v` 进入 visual mode 移动光标就是选中文本了。V 则是以行为单位

`y` 拷贝 `d` 删除

`:s/old/new/g` 轻松替换一行里面的全部 old <—> new，如果只替换行内的第一个，去掉最后的 /g，都是通用的正则了

如果要替换指定范围内的行数，前面简单的加上就可以了

`:80，84s/create/delete/g` 其中 . 表示当前行，# 表示最后一行

全部替换的话，可以使用

`:%s/old/new/g`

### 书签，标签，标记

浏览代码时需要马克一下的时候：

`mX` : X为任意字母

`:marks` 查看当前设置的所有标签

`'X` 跳到书签

`''` 返回到跳转前的位置

`delmarks a` 删除标签a

`delmarks!` 删除所有标签，不包括[A-Z]和[0-9]标签

### 代码移动

`A(a, b, c...) m B` 移动单行或多行到某一行

`:set sw ?` 查看代码一次移动的个数

`:set sw=2` 设定2位

`:le | :ce | :ri` 定位左中右

运行 shell 命令（终端）

`:! [command]` 会跳回 shell 执行，完成按任意键返回

### 多文档编辑

之前觉得 vi 的多文档编辑用着很不方便，现在接触了几个，用过了 MiniBufExplorer，发现看着不是很舒服。还是使用ｌｓ比较好看一些。

`:ls` 展示全部的打开文档

`:xn` 切换到向下的第x个文档

`n ctrl+6` : 切换到第n个buffer

`ctrl+6` 或 :e# 回到前一个编辑文件

### 标签页

一个标签页相当于一个 vim，一个 vim 可以有多个分屏

`:tabs` 查看所有打开的tab

`:tabe[dit]` 在新标签页里编辑文件，替换 :tabnew [filename]

`:tabc[lose]` 关闭当前标签页

`:tabo[nly]` 关闭所有除了当前标签页以外的所有标签页

`:tabm[ove] N` 把标签页移到序号为N位置

`:tabp[revious]` 转到上一个标签页，替用 :tabN[ext]

`:tabn[ext]` 转到下一个标签页

`:tabr[ewind]` 转到第一个标签页，替用 :tabfir[st]

`:tabl[ast]` 转到最后一个标签页

`gt` 常规模式切换下一个tab，前面加上数字则是切换到第几个，比如 `2gt` 是切换到第二个，不是切换两次

`gT` 常规模式切换上一个tab

`:tabdo` 为每个标签页执行命令

`:tabf[ind]` 寻找 ‘path’ 里的文件，在新标签页里编辑之

### 分屏

在shell里打开几个文件并且分屏:

`vim -On file1 file2 ...`

`vim -on file1 file2 ...`

大O表示垂直分割(vertical)，小o表示水平分割（默认horizontal）

在vim里打开一个分屏:

创建空白分屏：

`:new`

打开任意文件：

`<C + w>s` 上下分屏

`<C + w>v` 左右分屏

`:vsp(:vsplit) filename` 水平分屏

`:sp(split) filename` 垂直分屏

打开当前文件：

`ctrl+w` 和 `s(split)`

`ctrl+w` 和 `v(vsplit)`

`:[n] split(vsplit) [++opt] [+cmd] [file]` n 为显示行数，opt 选项信息，cmd 预处理命令，file 文件

`:sview filename` 只读方式打开

`:sfind [++opt] [+cmd] [file]` 与 split 一致，若无文件，则不打开，split 会新建文件

关闭分屏:

`:only` 或者 `ctrl+w o` 取消其它分屏，只保留当前分屏

`ctrl+w c(close)` 关闭当前分屏

`ctrl+w q(quit)` 只剩最后一个分屏以后推出

`:qa` 关闭所有分屏

移动光标，也就是切换分屏；也可以移动分屏，比如将左分屏移动到右边。

`ctrl+w w` 各种切换，只有两个分屏的时候还是比较方便的

`ctrl+w h(H)` 左

`ctrl+w j(J)` 下

`ctrl+w k(K)` 上

`ctrl+w l(L)` 右

分屏互换

`ctrl + w + r` 向下（无下则向右）方交换窗口，而Ctrl + w + R则和它方向相反

`ctrl + w + x` 交换同列或同行的窗口的位置

`ctrl + w + K` 移动当前窗口至屏幕顶端，并占用全部宽度

`ctrl + w + J` 移动窗口至屏幕底端，并占用全部宽度

`ctrl + w + H` 移动窗口至屏幕左端，并占用全部高度

`ctrl + w + L` 移动窗口至屏幕右端，并占用全部高度

最后就是改变分屏尺寸的操作了。

`ctrl+w <` 左

`ctrl+w >` 右

`ctrl+w +` 上

`ctrl+w -` 下

`ctrl+w =` 恢复均等

### diff

`vimdiff a b` shell 命令，打开 vim 比较两个文件异同

`vim -d a b `同上，简写

`:diffsp(split) xxx` 与 xxx 文件对比异同，垂直

`:vert diffsp(split) xxx` 与 xxx 文件比较异同，水平

`:diffoff` 关闭对比效果

### 宏

`qx` 启动宏录制，录制到 x 寄存器

`q` 结束宏录制

`@x` 运行宏

`@@` 运行最近运行的宏

### 其他

`:n1,n2 co n3`: 将n1行到n2行之间的内容拷贝到第n3行下

`:n1,n2 m n3`: 将n1行到n2行之间的内容移至到第n3行下

`:n1,n2 d`: 将 n1行到n2行之间的内容删除

`:n1,n2 w!command`: 将文件中n1行至n2行的内容作为command的输入并执行

, 若不指定n1，n2，则表示将整个文件内容作为command的输入

问题

`:set fileformats=unix,dos` 处理 ^M，分屏再次打开

^M 问题

若你的vim版本大于7.1，并想用dos显示和保存，如下语句：

`:e ++ff=dos`

若你的vim版本小于等于7.1，又想把文章按照dos格式显示和保存，如下语句：

`:set ff=dos`

`:%s/\r+$//e`

若你的vim版本小于等于7.1，又想把文章按照unix格式显示和保存，如下语句：

`:set ff=unix`

`:%s/\r+$//e`

### 按键映射

主要有map，noremap，unmap，mapclear四个 命令，并且有四个前缀i,c,n,v修饰

 
nore 表示非递归，见下面的介绍

n 表示在普通模式下生效

v 表示在可视模式下生效

i 表示在插入模式下生效

c 表示在命令行模式下生效

map 表示递归的映射

unmap 表示删除某个映射

mapclear 表示清除映射
  