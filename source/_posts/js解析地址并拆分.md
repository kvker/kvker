---
layout: note
title: js解析地址并拆分
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
let value = '张三 13313131313 浙江省杭州市西湖区西湖大道100号 310000'
    try {
      // 先替换所有的多空格
      value = value.replace(/\s+/, ' ')
      const [name, phone, address, zip_code] = value.split(' ')
      const [province, city, district_county] = address.match(/.+?(省|市|区)/g)
      const temp_arr = address.split(district_county)
      const detail_address = temp_arr[temp_arr.length - 1]
      console.log([name, phone, address, zip_code])
      console.log([province, city, district_county])
      console.log(detail_address)
    } catch (error) {
      console.log(error)
    }
```
  