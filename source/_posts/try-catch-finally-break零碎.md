---
layout: note
title: try-catch-finally-break零碎
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```
以下主要说明三点：       try...catch...finally的用法       break的用法       本题的解题过程      
    
         
    一、try catch 还有finally的用法😊    
         1、try catch 还有finally的基本概念    1）try块一共有三个关键字try catch 还有finally；    2）finally 语句无论 try 和 catch 执行结果如何都会执行；（本题考到的知识点）    3）catch是捕获到 try语句块里的错误才会执行；    注意： catch 和 finally 语句都是可选的，但你在使用 try 语句时必须至少使用一个（也就是try必须搭配catch或者finally）。    
    2、try catch 还有finally代码块中 有return时 的执行情况（本题考到的知识点）    
    例一：            如果try语句没有使用finally，则返回try语句中return的东西，            函数try...catch语句之外的return 就不执行了    function testFinally() {
     var num = 10;
     try {
         return num + 1;//return这里的值11
     } catch (err) {
         console.log(err)
     }
     return num + 5; //无效，没执行到这，try...catch执行之后就跳出了
                     //除非try...catch...finaly语句中没有return
 }
 console.log(testFinally());//11    
    
       例二：               如果try语句后面有finally，try中的return不会跳出函数,因为一定要进入finally语句               函数try...finally语句之外的return 就不执行了    function testFinally() {
    var num = 10;
    try {
        return num += 1; //return右边的语句正常执行，计算得num=11
    } finally {        //有finally，try中的return不会跳出函数，因为一定要进入finally语句
        return num + 20; //11+20=31
    }
    return num + 5; //无效，没执行到这，try...finally执行之后就跳出了
}
console.log(testFinally())；// 31

   
    例三：（可看完后面的break知识点，再来看这个例子）
         如果try语句后面有finally，try中就算有break用来跳出语句块，也不管用
         只要有finally，不管try和catch语句中执行什么，一定会进入finally语句
   function testFinally() {
    var num = 10;
    aaa: try{
        break aaa; //有break按理说应该要跳出 try...finally... 这个语句块了
                   //但是不管用，因为后面有finally，一定要进入finally语句
    } finally {         
        return num + 20; //10+20=30
    }
    return num;//失效，没执行到这
}
console.log(testFinally());// 30    重点记住：try...catch...finally语句中，只要有finally存在，    
    
    
    
    
    二、break 的用法😄    
         1、break语句用于跳出 switch语句 或者 循环语句（ for 、for..in、while、do...while）        语法：break;    1）当break语句用于switch语句时，会跳出switch代码块，终止执行switch代码。    2）当break语句用于循环语句时，会跳出整个循环，不再执行后续剩余的循环。    3）注意break与continue的区别：continue会跳出本轮循环，继续执行后续剩余的循环    2、break语句也可用于标签引用，用于跳出标签指向的代码块。（本题考到的知识点）       语法：break labelName;    
    
 例一:
            在标签引用中使用 break 语句，用于跳出标签代码块：
   var cars = ["BMW", "Volvo", "Saab", "Ford"];
var text = "";
list: { //list标签引用
    text += cars[0];
    text += cars[1];
    text += cars[2];
    break list; //在标签引用中使用 break 语句，用于跳出list代码块，不再执行list代码块里剩余的代码
    text += cars[3];
}
console.log(text);//BMW Volvo Saab    例二:
            在标签引用中使用 break 语句，用于跳出嵌套循环：  var text = "";
var i, j;
 
Loop1: for (i = 0; i < 3; i++) { // 第一个循环标签 "Loop1"
    Loop2: for (j = 10; j < 15; j++) {// 第二个循环标签 "Loop2"
        if (j == 12) {
            break Loop2;//跳出Loop2代码块
        }
        console.log(i, j)
    }
}
//i=0,j=10
//i=0,j=11
//i=1,j=10
//i=1,j=11
//1=2,j=10
//i=2,j=11
   
    
    
    
    三、本题过程😁  var i = 100;
function foo() {     //bbb 是 try... finally...这个代码块
    bbb: try {        //break语句的标签引用，用于跳出 bbb标签 代码块
        console.log("position1");//打印position1
        return i++;  } //继续执行return右边的代码，此时i++为100，i为101
    finally {                //只要有finally，不管try语句里写啥（return,break之类的失效），都会执行finally语句
        break bbb;     //跳出bbb标签代码块
    }                   //跳出try...finally后，因为finally中没有return，故可执行后续代码
                           //如果finally中有return，则无法执行后续代码了
    console.log("position2");//打印position2
    return i;//返回i,i=101
}
foo();
```
  