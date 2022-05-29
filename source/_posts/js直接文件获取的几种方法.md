---
layout: note
title: js直接文件获取的几种方法
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
function clickFileWay() {
  const input = document.createElement('input')
  input.type = 'file'
  input.onchange = e => {
    let file = e.target.files[0]
    console.log(file)
    // so on
  }
  input.click()
}
 
function clickDirWay() {
  const input = document.createElement('input')
  input.type = 'file'
  input.webkitdirectory  = true
  input.onchange = e => {
    let file = e.target.files[0]
    console.log(file)
    // so on
  }
  input.click()
}
 
 
function clickFpWay() {
  showOpenFilePicker({
    types: [{
      accept: {
        'image/*': ['png', 'jpg', 'jpeg']
      }
    }],
    multiple: true,
  }).then(file_handles => {
    let file_handle = file_handles[0]
    let file = file_handle.getFile()
    // so on
  })
  console.log(showOpenFilePicker())
}
 
function clickDpWay() {
  showDirectoryPicker({
    types: [{
      accept: {
        'image/*': ['png', 'jpg', 'jpeg']
      }
    }],
    multiple: true,
  }).then(file_handles => {
    let file_handle = file_handles[0]
    let file = file_handle.getFile()
    // so on
  })
  console.log(showDirectoryPicker())
}
```
  