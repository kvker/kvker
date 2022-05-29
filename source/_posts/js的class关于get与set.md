---
layout: note
title: js的class关于get与set
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

当类中一个属性只有get()方法而无set()方法时，该属性是无法进行赋值的，连构造方法中的初始化都不行，因此，当对象的price属性在构造方法中进行初始化，会抛出异常。
  