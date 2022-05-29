---
layout: note
title: JS操作DOM元素的类名class
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---


1.classList

add( String [, String] )
添加指定的类值。如果这些类已经存在于元素的属性中，那么它们将被忽略。

remove( String [,String] )
删除指定的类值。

item ( Number )
按集合中的索引返回类值。

toggle ( String [, force] )
当只有一个参数时：切换 class value; 即如果类存在，则删除它并返回false，如果不存在，则添加它并返回true。
当存在第二个参数时：如果第二个参数的计算结果为true，则添加指定的类值，如果计算结果为false，则删除它

contains( String )
检查元素的类属性中是否存在指定的类值。

replace( oldClass, newClass )
用一个新类替换已有类。
IE10+仅有限兼容，不支持SVG元素，不支持 toggle(), 多参数的add()和remove(), 以及replace()

2.className + 字符串操作
```js
 var classValue = element.className;
    //加上空格, 不然想查询"abc"，若原本有"abcd"的类名的就会有问题
    classValue = " " + classValue + " ";

    //查询
    classValue.indexOf(" yourClassName ") === -1 ? false : true;//同样的查询时也要带上空格*2

    //增加
    classValue += " yourClassName";//注意空格*1
    //或
    classValue = classVal.concat(" someClassName");//注意空格*1
    element.setAttribute("class", classValue);

    //删除
    classValue = classValue.replace(" yourClassName "," ");//注意空格*3
    element.setAttribute("class",classValue );

    //修改
    classValue = classValue.replace(" targetClassName "," yourClassName ");//注意空格*4
    element.setAttribute("class",classValue );
```
3.className + 正则
和上面的方法一样，只是空格换成了正则判断

```js
var element = document.querySelector('#yourId');
    //查询
    function hasClass( element,yourClassName ){
    return !!element.className.match( new RegExp( "(\\s|^)" + yourClassName + "(\\s|$)") );
    // ( \\s|^ ) 判断前面为空格或起始 （\\s | $ ）判断后面为空格或结束 两个感叹号为转换为布尔值 以方便做判断
    };
    //增加
    function addClass( element,yourClassName ){
    if( !hasClass( element,yourClassName ) ){
    element.className += " " + yourClassName;
    };
    };
    //删除
    function removeClass( element,yourClassName ){
        if( hasClass( element,yourClassName ) ){
            element.className = element.className.replace( new RegExp( "(\\s|^)" + yourClassName + "(\\s|$)" )," " );
        };
    };
```
  