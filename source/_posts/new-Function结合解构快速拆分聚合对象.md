---
layout: note
title: new-Function结合解构快速拆分聚合对象
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
let source_obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5
}

function adapter({ source_obj, filter }) {
  return new Function(
    `payload`,
    `
      let {source_obj, filter} = payload
      let {${filter.join(",")}} = source_obj
      let temp_obj = {${filter.map((i) => i.split(":")[1] || i).join(",")}}
      return temp_obj
    `
  )({ source_obj, filter })
}

let result = adapter({ source_obj, filter: ["a", "b", "c", "d:x", "e:y"] })
console.log(result)

document.write(JSON.stringify(source_obj))
document.write(' => ')
document.write(' adapter({ source_obj, filter: ["a", "b", "c", "d:x", "e:y"] }) ')
document.write(' => ')
document.write(JSON.stringify(result))
```
  