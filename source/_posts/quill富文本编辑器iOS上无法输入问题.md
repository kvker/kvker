---
layout: note
title: quill富文本编辑器iOS上无法输入问题
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

造成Quill-Editor无法获取焦点的大部分原因是Css的问题，罪魁祸首：

*{
  -webkit-user-select:none;  
}
ios下直接造成无法获取焦点。

解决方法，覆盖以上css设置即可：

```css
.write-container .ql-editor.write {
  -webkit-user-select: text;
  -user-select: text;
}
```
  