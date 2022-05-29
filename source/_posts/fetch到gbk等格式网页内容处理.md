---
layout: note
title: fetch到gbk等格式网页内容处理
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

``js
let ret = await fetch(url)
let blob = await ret.blob()
let reader = new FileReader()
reader.readAsText(blob, 'gbk')
return new Promise((resolve) => {
  reader.onload = function() {
    let text = reader.result
    let matchs = text.match(/id="content"\>([\s\S]*?)\<\/div/)
    let content = matchs[1]
    if(content) {
      content = content.replace(/&nbsp;/g, ' ').replace(/<br \/>/g, '')
    }
    // console.log(content)
    resolve(content)
  }
})
```
  