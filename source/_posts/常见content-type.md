---
layout: note
title: 常见Content-Type
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

### text/html
> 文本方式的网页文件。

### text/plain
> 窗体数据以纯文本形式进行编码，其中不含任何控件或格式字符。空格转换为 “+” 加号，但不对特殊字符编码。

### application/x-www-form-urlencoded
> 默认地，表单数据会编码为 “application/x-www-form-urlencoded”。就是说，在发送到服务器之前，所有字符都会进行编码，空格转换为 “+” 加号，特殊符号转换为 ASCII HEX 值。 窗体数据被编码为：名称/值对，这是标准的编码格式。

### multipart/form-data
> 窗体数据被编码为一条消息，页上的每个控件对应消息中的一个部分，上传附件用到。在使用包含文件上传控件的表单时，必须使用该值。

### application/json
> 数据以json形式进行编码。

### application/xml
> 数据以xml形式进行编码，application/xml会根据xml头指定的编码格式来编码。

### text/xml
> 文本方式的xml文件，text/xml忽略xml头所指定编码格式而默认采用US-ASCII编码。
  