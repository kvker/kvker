---
layout: note
title: Linux软链接与硬链接
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

软硬链接文件都是双向，修改任意一边都会变化。下面的B是新文件，A是已有文件（即需要被指向的文件）

`ln PathA PathB` 硬链接将 PathA 链接到 B 上面，此方法需要 PathB 文件存在
`ln PathA -> PathB` 硬链接将 PathA 链接到 B 上面，此方法不需要 PathB 文件存在

`ln -sf PathA PathB` 软链接将 PathA 链接到 B 上面，此方法需要 PathB 文件存在
`ln -sf PathA -> PathB` 软链接将 PathA 链接到 B 上面，此方法不需要 PathB 文件存在
  