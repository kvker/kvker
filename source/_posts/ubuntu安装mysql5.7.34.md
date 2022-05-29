---
layout: note
title: ubuntu安装mysql5.7.34
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

说明

ubuntu 默认是安装mysql 8.x的版本。如果要安装5.7的，可以使用离线安装的方式。

1. 下载mysql 

　　`https://dev.mysql.com/downloads/mysql/5.7.html` 选择ubuntu18的64位的tar包

　　`mysql-server_5.7.34-1ubuntu18.04_amd64.deb-bundle.tar*`

2. 安装

      解压后，按如下顺序安装，可能会遇到额外依赖（标红的）。按如下方法安装即可
```shell
dpkg -i mysql-common_5.7.34-1ubuntu18.04_amd64.deb
dpkg -i libmysqlclient20_5.7.34-1ubuntu18.04_amd64.deb
dpkg -i libmysqlclient-dev_5.7.34-1ubuntu18.04_amd64.deb
dpkg -i libmysqld-dev_5.7.34-1ubuntu18.04_amd64.deb
dpkg -i libmysqlclient20_5.7.34-1ubuntu18.04_amd64.deb
wget http://security.ubuntu.com/ubuntu/pool/universe/m/mecab/libmecab2_0.996-1.2ubuntu1_amd64.deb
dpkg -i libmecab2_0.996-1.2ubuntu1_amd64.deb
dpkg -i mysql-community-client_5.7.34-1ubuntu18.04_amd64.deb
apt install libtinfo5
dpkg -i mysql-client_5.7.34-1ubuntu18.04_amd64.deb
dpkg -i mysql-community-server_5.7.34-1ubuntu18.04_amd64.deb
dpkg -i mysql-server_5.7.34-1ubuntu18.04_amd64.deb
```
至此安装成功

 

3. 修改些配置

修改/etc/mysql/mysql.conf.d下的文件mysqld.cnf

```
bind-address=xxx
character-set-server=utf8mb4
```

4. 重启mysql 

`service mysql restart`
  