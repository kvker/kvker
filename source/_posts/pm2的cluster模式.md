---
layout: note
title: pm2的cluster模式
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

pm2的cluster模式可以利用多核优化，参考：

`pm2 -i 2` 双实例

```json
[{
  "name"        : "server_name",
  "script"      : "./index.js",
  "cwd"         : "./",
  "exec_mode": "cluster", // 使用的模式
  "instances": 10, // 开启的线程数
  "error_file" : "app-err.log",
  "out_file"   : "app-out.log",
  "env": {
    "NODE_ENV": "production",
    "MICRO_CACHE":true
  }
}]
```


  