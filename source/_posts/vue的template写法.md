---
layout: note
title: vue的template写法
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```html
<div id="app">
    <h1>我是直接写在构造器里的模板1</h1>
</div>

<template id="demo3">
    <h1 style="color:red">我是选项模板3</h1>
</template>

<script type="x-template" id="demo4">
    <h1 style="color:red">我是script标签模板4</h1>
</script>

<script>
    var vm=new Vue({
        el:"#app",
        data:{
            message:1
        },

        //第2种模板 写在构造器里
        //template:`<h1 style="color:red">我是选项模板2</h1>`

        //第3种模板 写在<template>标签里
        //template:'#demo3'

        //第4种模板 写在<script type="x-template">标签里
        template:'#demo4'
    })
```
  