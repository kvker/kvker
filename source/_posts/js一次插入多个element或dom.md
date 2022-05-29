---
layout: note
title: js一次插入多个element或dom
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
const listNode = document.getElementById("list")

// 创建一个片段,此时还没有插入到DOM树中
const frag = document.createDocumentFragment()

// 执行插入
for (let x=0; x<10;x++) {
    const li = document.createElement('li')
    li.innerHTML = 'List item' + x
    frag.appendChild(li)
}

// 执行都完成后,在插入到 DOM 树中
listNode.appendChild(frag)
```
  