---
layout: note
title: 自己制作代理服务器，基于npm的shadowsocks或shadowsocks-nodejs项目
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

如果有台能翻墙的服务器，那么我们就可以自己做一个代理，这样本地就可以科学上网啦..
本文主要介绍如果通过自己的服务器搭建一个代理。

准备
一台可以科学上网的服务器,阿里云、腾讯云、或国外的都可以
nodejs 环境
shadowsocks 安装包
本地shadowsock 程序
服务器搭建
首先，需要安装nodejs环境，具体参考记录一次centos服务器部署过程中的nodejs部分。

然后安装shadowsocks 包。

npm install shadowsocks


安装后修改node_modules/shadowsocks/对应的config.json配置文件，修改端口和密码等。

{
    "server":"0.0.0.0", // 我用的是腾讯云，这里修改成了0.0.0.0
    "server_port":3333,//此处修改为自己的端口
    "local_address":"127.0.0.1",
    "local_port":1080,
    "password":"woshimima",//修改你自己的密码
    "timeout":600,
    "method":"aes-256-cfb"
}
最后启动：

node_modules/shadowsocks/bin/ssserver
本地程序
我们可以这https://github.com/shadowsocks/shadowsocks-windows/releases下载window s版本的程序。

然后启动后配置对应的服务器即可。

本地程序配置
本地程序配置

然后启动，查看下自己的ip是不是变化了。(注意模式换成全局模式，平时使用PAC即可)

转载请注明出处: https://chrunlee.cn/article/nodejs-ssserver.html
  