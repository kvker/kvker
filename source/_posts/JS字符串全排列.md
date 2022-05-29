---
layout: note
title: JS字符串全排列
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

vue下，code字符串长度>3
```js
getAll(str = this.code) {
  if(str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str]
  return str.split('').reduce((acc, letter, i) =>
    acc.concat(this.getAll(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)), [])
}
```
  