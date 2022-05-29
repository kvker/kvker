---
layout: note
title: JS的splice-slice-split
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

## splice
定义：强大的数组操作方法
用法 ： splice( para1,para2 ) : 删除数组中任意数量的项，从para1开始的para2项。注意的是用splice删除数组中的值会直接将某几项从数组中完全删除，会导致数组length值的改变，这与delete的删除置为undefined是不一样的。
splice( para1,para2,val1,val2… )：项数组中添加和删除项，para1表示可以添加的项数，para2表示删除的项数，后面的变量表示要添加的项的值，注 意是从para1之后开始删除和添加的。
注意 ： 参数为负数的问题，如果para1为负数，则会加上数组的长度作为para1的值，而para2为负数或0的话不会执行删除操作。

## slice
定义：接收一个或两个参数，它可以创建一个由当前数组中的一项或多项组成的新数组，注意是新数组哦~ 也就是说它不会修改原来数组的值。
用法：slice( para1 ),会截取从para1开始的到原数组最后的部分；
slice（para1,para2）会截取原数组的从para1开始的para2-para1个数组。
注意：当两个参数中存在负数时，用原数组的长度加上两个负数的参数作为相应的参数来计算。

## split
根据特定的字符切割字符串并且返回生成的数组。
如 ： str = “s-aaa-sss-eee-www”;
targetArr = str.split(“-”); //[‘s’,’aaa’,’sss’,’eee’,’www’]
  