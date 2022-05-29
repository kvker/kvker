---
layout: note
title: ubuntu安装最新Node.js
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

源问题导致apt安装的nodejs版本很低，通过如下方案比较靠谱。16.x的16可以替换，x也可以替换。
```sh
curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt --purge remove nodejs
```

npm的话可以使用`sudo apt install npm`，不过由于源问题，容易是低版本的，执行`sudo npm i -g npm@latest`即可最新。
  