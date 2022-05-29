---
layout: note
title: ssh公钥登录
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

对应用户的验证公钥集合 `.ssh/authorized_keys`

将自己的公钥内容追加到这个文件后面即可

自己的公钥在`.ssh/id_rsa.pub`

可使用scp或ftp上传服务器

## 新系统默认不启动

`/etc/ssh/sshd_config` 文件

```shell
RSAAuthentication yes
PubkeyAuthentication yes
AuthorizedKeysFile     .ssh/authorized_keys 
```
  