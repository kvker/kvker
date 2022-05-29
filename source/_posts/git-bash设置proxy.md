---
layout: note
title: git-bash设置proxy
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```bash
git config --global http.proxy "http://127.0.0.1:1080"
git config --global https.proxy "https://127.0.0.1:1080"
```

```bash
Host github.com
   User git
   IdentityFile "C:\Users\your-username\.ssh\id_rsa"
   ProxyCommand connect.exe -H 127.0.0.1:1080 %h %p
```
  