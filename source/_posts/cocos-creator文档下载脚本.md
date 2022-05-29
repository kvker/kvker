---
layout: note
title: cocos-creator文档下载脚本
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
let ps = [], i = 1, as = $$('.chapter a')
// as.length = 10
as.forEach(a => {
  let href = a.href
  ps.push(fetch(href)
    .then(ret => ret.text())
    .then(text => {
      return new Promise(s => {
        setTimeout(() => {
          console.log(i++)
          text = text.replace(/src=\"(.*?)\"/g, 'src="' + href + '$1' + '"')
          s(text.match(/\<section\sclass=\"normal\smarkdown-section\"\>[\s\S]*\<\/section>/)[0])
        }, 500)
      })
    })
  )
})

Promise.all(ps)
  .then(rets => rets.reduce((p, c) => p += c))
  .then(text => {
    let a = document.createElement('a')
    a.download = "cocos.html"
    a.href = URL.createObjectURL(new Blob([text], { type: "text/plain" }))
    document.body.append(a)
    a.click()
  })
```
  