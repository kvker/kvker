---
layout: note
title: MongoDB用户相关
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

## 用户简单管理

`sudo mongod --auth` 开启验证模式
`use db` 切换到对应的 db
`db.addUser(用户名, 密码)` 为指定 db 添加用户, 默认为 db 拥有者, 进入此数据库必须使用该账户
`db.auth(用户名, 密码)` 进入 db 报错后的登录方式

## 增删改查用户
`db.createUser({user: "admin",pwd: "password",roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]})` 增
`db.system.users.remove({user:"XXXXXX"})` `db.system.users.remove({})` 删
`db.updateUser('user', {})` 改
`db.system.users.find()` `show users` 查

分类 | role(角色) | 简要说明
-|-|-
数据库用户角色(DB User Roles) | read readWrite|  为某个数据库创建一个用户, 分配该数据库的读写权力
数据库管理员角色(DB Admin Roles) | dbAdmin dbOwner userAdmin|  拥有创建数据库, 和创建用户的权力
 集群管理角色(Culster Administration Roles) | clusterAdmin clusterManager clusterMonitor hostManager|  管理员组, 针对整个系统进行管理
备份还原角色(Backup and Restoration Roles) | backup restore|  备份数据库, 还原数据库
所有数据库角色(All-Database Roles) | readAnyDatabase readWriteAnyDatabase userAdminAnyDatabase dbAdminAnyDatabase|  拥有对admin操作的权限
Superuser Roles(超级管理员) | rootdbOwner userAdmin userAdminAnyDatabase| 这几个角色角色提供了任何数据任何用户的任何权限的能力，拥有这个角色的用户可以在任何数据库上定义它们自己的权限
* 先以非授权的模式启动MongoDB
    1. `mongod -f /mongodb/etc/mongo.conf` linux/Mac
    `mongod --config c:\mongodb\etc\mongo.conf` 或者 `net start mongodbwindows`
    备注
    `/mongodb/etc/mongo.conf` 位 mongo 配置文件所在的地址

    2. 授权：
    `mongod -f /mongodb/etc/mongo.conf --auth`
    备注：
        1. --auth代表授权启动，需要帐号密码才能访问

        2. auth=true可以加到mongo.conf配置文件里面去进行统一管理

* 创建管理员
    1. 通过非授权的方式启动mongo
    2. 创建admin数据库
        `use admin`
    3. 添加管理员用户
        `db.createUser({user:"admin",pwd:"123456",roles:["root"]})`
    备注：用户名和密码可随意定
    4. 认证
        `db.auth("admin", "123456")`

* 以授权的方式启动Mongo,给使用的数据库添加用户
    1. 切换数据库
        `use test`
    2. 创建用户
        `db.createUser({user: "root", pwd: "123456", roles: [{ role: "dbOwner", db: "test" }]})`
    3. 通过客户端连接test数据库

* 用户角色分类

    > 数据库用户角色：read、readWrite;
    数据库管理角色：dbAdmin、dbOwner、userAdmin；
    集群管理角色：clusterAdmin、clusterManager、clusterMonitor、hostManager；
    备份恢复角色：backup、restore；
    所有数据库角色：readAnyDatabase、readWriteAnyDatabase、userAdminAnyDatabase、dbAdminAnyDatabase
    超级用户角色：root
    // 这里还有几个角色间接或直接提供了系统超级用户的访问（dbOwner 、userAdmin、userAdminAnyDatabase）
    内部角色：__system
  