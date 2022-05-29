---
layout: note
title: js的sort排序与混合排序
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

原理速记：x-y小于零则x在前，等于零不动，大于零x置后。

单排序
```js
array.sort((a - b) => a - b) // 从小到大，-1在前
array.sort((a - b) => b - a) // 从大到小，1在后
```

奇偶排序
```js
// 奇数在前，偶数在后
array.sort((a - b) => {
  if(a % 2) {
    return -1
  } else {
    return 1
  }
})
```

混合排序
```js
var jsonStudents = [
    { name: "Dawson", totalScore: "197", Chinese: "100", math: "97" },
    { name: "HanMeiMei", totalScore: "196", Chinese: "99", math: "97" },
    { name: "LiLei", totalScore: "185", Chinese: "88", math: "97" },
    { name: "XiaoMing", totalScore: "196", Chinese: "96", math: "100" },
    { name: "Jim", totalScore: "196", Chinese: "98", math: "98" },
    { name: "Joy", totalScore: "198", Chinese: "99", math: "99" }
];

jsonStudents.sort(function(a, b) {
    var value1 = a.totalScore,
        value2 = b.totalScore;
    //总分相同 
    if (value1 === value2) {
        // 按语文分数降序排序
        return b.Chinese - a.Chinese;
    }
    // 总分不同，降序排序
    return value2 - value1;
});

console.log("jsonStudents :", jsonStudents);
```
  