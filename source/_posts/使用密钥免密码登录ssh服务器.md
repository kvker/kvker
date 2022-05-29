---
layout: note
title: 使用密钥免密码登录ssh服务器
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

客户端生成公钥和私钥
`ssh-keygen -b 4096 -t rsa`

生成的公钥保存在 .ssh/id_rsa , 私钥在.ssh/id_rsa.pub

上传公钥到远程服务器
编辑 `/etc/ssh/sshd_config` 文件， 确保以下参数

```
RSAAuthentication yes
PubkeyAuthentication yes
```

本地客户端输入

`ssh-copy-id user@host`

成功即可将公钥追加到服务器的 `.ssh/authorized_keys`

之后则不需要密码登录了
  