---
layout: note
title: defineProperty属性描述符
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

属性描述对象的6个元属性：
value：设置该属性的属性值，默认值为undefined
writable：表示能否修改属性的值，也就是说该属性是可写的还是只读的，默认为true（可写）
enumerable：表示改属性是否可遍历，默认为true（可遍历）
configurable：表示能否通过 delete 删除属性、能否修改属性的特性，或者将属性修改为访问器属性，默认为true（可配置）
get：get是一个函数，表示该属性的取值函数（getter），默认为undefined
set：get是一个函数，表示该属性的存值函数（setter），默认为undefined
configurable  如果设为false，将阻止某些操作改写该属性，比如无法删除该属性，也不得改变该属性的属性描述对象（value属性除外
  