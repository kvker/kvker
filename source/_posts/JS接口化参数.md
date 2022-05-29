---
layout: note
title: JS接口化参数
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
function interfaceObject(interface_array, source_obj, is_strict) {
  let new_obj = {}
  let lack_key = []
  interface_array.forEach(key => {
    if(source_obj.hasOwnProperty(key)) {
      new_obj[key] = source_obj[key]
    } else {
      if(is_strict) {
        lack_key.push(key)
      } else {
        new_obj[key] = null
      }
    }
  })
  console.log(new_obj)
  if(lack_key.length) throw new TypeError('原始对象缺少必须的key: ' + lack_key.reduce((p, c) => p += c + ', ', '').replace(/,\s$/, ''))

  return new_obj
}

let int = ['a', 'b']

let obj = {a: 1, c: 2}

interfaceObject(int, obj)
interfaceObject(int, obj, !!1)
```
  