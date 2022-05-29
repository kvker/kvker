---
layout: note
title: iOS给UIView添加点击事件
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```Object-C
self.view.userInteractionEnabled = YES;
  UITapGestureRecognizer * tapGesture = [[UITapGestureRecognizer alloc] initWithTarget:self action:@selector(hiddenTableView)];
  [self.view addGestureRecognizer:tapGesture];
  [tapGesture setNumberOfTapsRequired:1];
```
  