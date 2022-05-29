---
layout: note
title: JS内存管理优化
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

1. 全局变量（或特殊情况下局部变量）可以在确保不使用后，将其赋值为null，这将会在下次Garbage Collection中回收掉；
2. 隐藏类，即从同一个Class（ES5的构造Function）中new出来的多个对象，V8中会默认将其置于一个隐藏类上，从而实现加速。但如果对其中某个进行原始Class中没有的属性增删，则会动态创建另一个隐藏类，这会影响内存速度；
3. 闭包的内存泄露，这个无需多言了；
4. 静态分配和对象池，对象池好理解，就是没有则创建，有则复用。而静态分配，意思就是尽量（在需要这种优化的情况下）避免某个操作中重复的创建新对象，然后弃用掉，与上述的对象池刚好对上。还有另一种情况，就是不要动态分配数组长度，极端情况下，可以指定数组长度……

4的示例：

```js
function addVector(a, b) { 
 let resultant = new Vector()
 resultant.x = a.x + b.x
 resultant.y = a.y + b.y
 return resultant
}

// 将对象于外部创建
function addVector(a, b, resultant) { 
 resultant.x = a.x + b.x
 resultant.y = a.y + b.y
 return resultant
}

// vectorPool 是已有的对象池 
let v1 = vectorPool.allocate()
let v2 = vectorPool.allocate()
let v3 = vectorPool.allocate()
v1.x = 10
v1.y = 5
v2.x = -3
v2.y = -6
addVector(v1, v2, v3)
console.log([v3.x, v3.y]) // [7, -1] 
vectorPool.free(v1)
vectorPool.free(v2)
vectorPool.free(v3)
// 如果对象有属性引用了其他对象
// 则这里也需要把这些属性设置为 null 
v1 = null
v2 = null
v3 = null
```
  