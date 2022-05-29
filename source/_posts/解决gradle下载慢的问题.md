---
layout: note
title: 解决gradle下载慢的问题
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

用AS开发安卓时，总会同步gradle，但又速度很慢。下面提供一种解决办法。

打开AS，记下同步的gradle版本信息，在官网下载相应的gradle版本。Gradle各版本下载地址：

http://services.gradle.org/distributions/ 我们下载都是all版本，里面包含了Gradle SDK的所有相关内容，包括：源码、文档、示例等。

将下载的gradle压缩文件，放到对应版本的C:\Users\Lenovo\.gradle\wrapper\dists\gradle-4.10.1-all\455itskqi2qtf0v2sja68alqd目录下。不要解压，运行AS会自动解压，生成相应文件。

  