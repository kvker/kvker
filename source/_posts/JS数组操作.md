---
layout: note
title: JS数组操作
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

`array = [3, 1, 2]` 每次使用都是这个值，不因为例子而更改

`array.push(4)` array = [3, 1, 2, 4]，自身添加到最后一个，返回长度

`array.pop()` array = [3, 1]，自身删除最后一个，返回 pop

`array.shift()` array = [1, 2] ，删除数组第一个元素, 并返回该元素

`array.unshift(4)` array = [4, 3, 1, 2]，添加若干到开头, 返回长度

`array.splice(1, 1, 0)` array = [3, 1, 0]，删除数组，索引开始，几个，具体
什么替换（一个一个）

`arr = array.slice(0, 1)` arr = [3], array 不变，从下标 0，到下标 1（下标可以是负数），返回新数组单不包含最后一个

`arr = array.slice()` arr = [3, 1, 2]，深拷贝的一种方法

`arr = array.concat(4, 5)` arr = [3, 1, 2, 4, 5]，连接若干数组或数组后添加值

`arr = array.concat()` arr = [3, 1, 2]，深拷贝的另一种方法

`arr.find(ele => ele > 10)` 根据条件返回对象

  