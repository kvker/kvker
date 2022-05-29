---
layout: note
title: JS常用的快速排序
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
/**
 * 1. 选择一个种子数，假设取中间
 * 2. 左边比种子数小，右边比种子数大，拆分数组
 * 3. 重复1，2的操作
 */

const randomArray = generateRandomString()
  .split('')
  .map((i) => +i)

function generateRandomString() {
  return Math.random().toString().replace('0.', '')
}

console.log(randomArray)
console.log(quickSort(randomArray))
function quickSort(array) {
  if (array.length <= 1) return array
  let i = 0,
    j = array.length - 1
  const seedIndex = ~~(array.length / 2),
    seed = array[seedIndex],
    left = [],
    right = []
  while (i <= j) {
    const current = array[i++]
    if (i === seedIndex) continue // 防止重复添加进入无限递归
    if (current < seed) {
      left.push(current)
    } else {
      right.push(current)
    }
  }
  return [...quickSort(left), seed, ...quickSort(right)]
}
```
  