---
layout: note
title: git配置模板
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

.gitconfig 文件

```
[alias]
    st = status
    a = add .
    cm = commit -m
    co = checkout
    br = branch
    com = checkout master
    cd = checkout dev
    mm = merge master
    md = merge dev
    pm = pull origin master
    pd = pull origin dev
    mz = merge zwei
[push]
    default = current
[user]
    name = kvker
    email = zweizhao@foxmail.com
[filter "lfs"]
    clean = git-lfs clean -- %f
    smudge = git-lfs smudge -- %f
    process = git-lfs filter-process
    required = true
[credential]
     helper = store
```
  