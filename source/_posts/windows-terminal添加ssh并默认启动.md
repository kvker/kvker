---
layout: note
title: windows-terminal添加ssh并默认启动
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

1. ssh服务端做好public key的自动认证，具体在`~/.ssh/authorized_keys`内追加自己设备的key即可。
2. 在terminal的setting里面添加一个list，如下。
3. 使用`New-Guid`在powershell里面生成一个合法的guid。
4. 将setting里面新增list的guid写上，在顶部的defaultProfile项改为默认启动的guid即可。

```json
{
        // Make changes here to the powershell.exe profile.
        "guid": "{generate key}",
        "name": "host name",
        "commandline": "ssh -t name@ip \"cd path/ && exec bash -l\"",
        "hidden": false
      }
```
  