---
layout: note
title: console整理
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

### log 占位符说明
占位符|说明
-|-
%d/%i|整数
%s|字符串
%c|样式表
%f|float
%o/%O|输出 Object，DOM 对象输出不同
> %c background: url('url') 图片注意 padding 来设置图片大小，宽高无效

### error
> 可追踪调用栈

### trace
> 与 error 一致，只是显示样式不同

### time, timeEnd
```
console.time('time')
//todo....
console.timeEnd('time')
```
> 输出为：time: xxx ms，用来计算耗时操作消耗的具体时间

### count
`console.count('count')` 调用次数打印：count: x

### assert
`console.assert(False, 'any...')` 断言打印，第一个参数为假才打印

### group, groupEnd
```
console.group('group')
console.log('any1...')
console.log('any2...')
//...
console.groupEnd('group')
```
> 分组打印，可嵌套

### clear
> 清理打印，团队合作时候可以用来清理别人的打印信息，下方再跟上需要的打印即可
  