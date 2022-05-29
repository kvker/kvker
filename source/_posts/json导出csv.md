---
layout: note
title: json导出csv
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
let data = []
let keys = ['name', 'town', 'village', 'address', 'update_time_label', 'manager']
let str = '名字, 区划, 乡村, 详细地址, 更新时间, 管理单位/个人\n'
for(let i = 0; i < data.length; i++) {
  let item = data[i]
  let j = 0
  for(let key in item) {
    if(item.hasOwnProperty(key) && keys.includes(key)) {
      let element = item[keys[j]]
      str += item[keys[j]] + '\t' + ','
      j++
    }
  }
  str += '\n'
}
//encodeURIComponent解决中文乱码， \ufeff是 ""
let uri = 'data:text/csv;charset=utf-8,\ufeff' + encodeURIComponent(str)
//通过创建a标签实现
let link = document.createElement("a")
link.href = uri
//对下载的文件命名
link.download = "纪念设施.csv"
link.click()
}
```
  