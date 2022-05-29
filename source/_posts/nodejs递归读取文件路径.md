---
layout: note
title: nodejs递归读取文件路径
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
const fs = require('fs')
const path = require('path')

function readFileList(dir, filesList = []) {
  const files = fs.readdirSync(dir)
  console.log(files)
  files.forEach((item, index) => {
    let full_path = path.join(dir, item)
    const stat = fs.statSync(full_path)
    if(stat.isDirectory()) {
      readFileList(path.join(dir, item), filesList)  //递归读取文件
    } else {
      filesList.push(full_path)
    }
  })
  return filesList
}

let files_list = []
readFileList(__dirname, files_list)
console.log(files_list)
```
  