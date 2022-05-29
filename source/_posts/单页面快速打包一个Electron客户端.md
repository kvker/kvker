---
layout: note
title: 单页面快速打包一个Electron客户端
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

全程使用cnpm即可
> 下载快速打包模板：
`git clone  https://github.com/electron/electron-quick-start [dir_name]`
`npm i`安装依赖，如果是没有的依赖库，可能会下载很慢，那么如下执行即可。
https://github.com/electron/electron/releases 下载需要的文件，然后放在用户目录下的.electron文件夹下即可，即`~/.electron/`
后面还会下载一个东西，几K基本都可以下载的。

* `git clone  https://github.com/electron/electron-quick-start [dir_name]`
* cd 进去
* `cnpm i`
* 直接electron .或者拷贝源代码进去然后`npm start`别`electron .`
* `cnpm i -g electron-packager`
* `electron-packager . [name] --out [out_path] --platform=[target, 本机系统忽略] --overwrite`

> 如果报错electron，则使用 `sudo npm install electron --unsafe-perm=true --allow-root`安装electron
  