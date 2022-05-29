---
layout: note
title: ES6小技巧
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

## 可选参数实现中间件
```js
function mandatory() {
    throw new Error("Missing parameter")
}
function foo(mustBeProvided = mandatory()) {
    return mustBeProvided
}
```

## for of 遍历下标

```js
const arr = ["a", "b", "c"]
for (const [index, elem] of arr.entries()) {
    console.log(`index = ${index}, elem = ${elem}`)
}
```

## MixIn

```js
const Storage = Sup => class extends Sup {
    save(database) { ··· }
};
const Validation = Sup => class extends Sup {
    validate(schema) { ··· }
};
class Person { ··· }
class Employee extends Storage(Validation(Person)) { ··· }
```
  