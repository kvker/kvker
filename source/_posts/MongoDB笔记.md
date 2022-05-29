---
layout: note
title: MongoDB笔记
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

## 配置文件路径
`/etc/mongod.conf`

### 基础命令

`mongod --dbpathd:/mongodb/data/data --port=27137 --logpathd:/mongodb/logs --bind_ip=ip --logappend` 指定path,port,ip,logs,指定项都可以省略从而使用默认项

`mongo ip:port` 指定连接ip与port,均可省略使用默认项,默认port27017,完成连接 mongodb://用户名:密码@ip:端口/数据库名

`show dbs`列出现有的数据库

`use 数据库名称` 切换或创建到数据库

`db.dropDatabase()` 删除当前所在的数据库

`db.createCollection(集合名,集合配置[可选])` 创建集合

`db.集合名.drop()` 删除集合

`db.集合名.insert(文档) `文档,如果此集合不存在则创建,此文档可以是变量

`db.集合名.insertMany(文档[数组])` 插入多条文档

`db.集合名.update(文档内容,{$set:新文档内容},配置项[可选])` 更新文档,默认更新第一条,配置项可选

`upsert:`可选，这个参数的意思是，如果不存在update的记录，是否插入objNew,true为插入，默认是false，不插入。
`multi:`可选，mongodb默认是false,只更新找到的第一条记录，如果这个参数为true,就把按条件查出来多条记录全部更新。
`db.col.save(文档[需要指定id])` 指定id可替换

`db.collection.remove(条件[可选],配置[可选])` 删除文档,无条件则删除全部内容

`db.集合名.find(条件[可选])` 查看文档

//各种条件
`$gt` //{key1:{$gt:value1}}greater than大于
`$gte` //同上greater than equal大于等于
`$lt` //同上less than小于
`$lte` //同上less than小于等于
`$ne` //同上not equal不等于
`AND` //{key1:value2,key2:value2}and条件
`OR` //{$or:[{key1:value1},{key2:value2}]}or条件
`ANDOR` //{key1:value1},{$or:[{key2:value2},{key3:value3}]}andor混合
`$type` //{key1:{$type:类型}}文档类型,具体表格如下
Type|Code
-|-|-
Double|1
String|2
Object|3
Array|4
Binarydata|5
Objectid|7
Boolean|8
Date|9
Null|10
RegularExpression|11
JavaScript|13
Symbol|14
JavaScript(withscope)|15
32-bitinteger|16
Timestamp|17
64-bitinteger|18
Minkey|255
Maxkey|127
`db.集合名.find({},{key1:1,key2:0}).sort({key2:1[-1]}).skip(n).limit(m)` 查询全部,key1显示,key2不显示,根据key2排序(1升序,-1倒序),跳过n个,显示后面m个

`db.集合名.ensureIndex({key1:1,key2:-1},{background:true,key3:bool,key4:bool...})` 为集合的key1,key2域创建复合索引(当然可以单独索引与唯一索引({unique:true})),查询key1时使用复合索引,查询key2时不使用复合索引,查询key1与key2时使用复合索引,后台创建索引(否则会卡线程)

简单理解索引就是在查询建立索引域会快即可

`db.集合名.getIndexes()` 检查建立的索引

`db.集合名.dropIndex({key1:1})` 删除索引

`db.集合名.aggregate(聚合操作符)` 聚合,将查询输出格式化,挺多内容的东西,参考 MongoDB聚合

备份和恢复是终端命令,不是进入mongo后的命令

`mongodump-hip:port-d数据库名-o备份路径文件夹` 备份数据库

`mongorestore-hip:port-d数据库名备份路径文件夹` 从备份数据库恢复

执行服务端自定义函数

`db.system.js.insert({_id:函数名,value:function(){函数主体}})` 创建函数

`db.loadServerScripts()` 先加载所有函数
`xxx()` 执行函数


  