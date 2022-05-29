---
layout: note
title: express获取参数方法
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

## express获取参数有三种方法：

* req.query 适合 http://localhost:3000/form?num=8888

* req.body 适合http://localhost:3000/form，然后Post一个num为tinyphp

* req.params 适合获取form后的num：http://localhost:3000/form/num

1.req.query 适合get请求
//获取数据
app.get('/form', function(req, res) {
    var num = req.query.num;
    res.send("你获取的get数据为:" + num);
});

2.req.body 适合post请求
前提：解析post数据需要用到body-parser

npm body-parser --save

var express = require('express');
var app = express();
//引入body-parser
var bodyParser = require('body-parser');
app.use(express.static('public'));

//需要use的
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
    extended: true
})); // for parsing application/x-www-form-urlencoded

//获取数据
app.post('/form', function(req, res) {
    var num = req.body.num;
    res.send("你获取的post数据为:" + num);
});

//设置监听端口
app.listen(3000);

3.req.params, 适用于URL获取参数
var express = require('express');
var app = express();

//获取数据
app.get('/form/:num', function(req, res) {
    var num = req.params.num;
    res.send("你获取到form/后的参数:" + num);
});

//设置监听端口
app.listen(3000);
  