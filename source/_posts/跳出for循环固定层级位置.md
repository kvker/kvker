---
layout: note
title: 跳出for循环固定层级位置
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
out:
for(let i = 0, j = this.goodsInfo.length; i < j; i ++) {
  let goods = this.goodsInfo[i]

  for(let m = 0, n = brands.length; m < n; m++) {
    let brand = brands[m]
    let title = brand.title

    if(title === goods.mill) {
      brand.count++
      continue out;
    }
  }

  let newB = {
      title: goods.mill,
      count: 1
    }
    brands.push(newB)
}
```
  