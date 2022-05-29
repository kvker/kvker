---
layout: note
title: html中引入调用另一个html文件
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

第一种：

```html
<body>
    <div id="page1"></div>
    <div id="page2"></div>
    <script>
          $("#page1").load("page/Page_1.html");
          $("#page2").load("page/Page_2.html");
    </script>
</body>
```
 

第二种：

```html
<head>
</head>
<body>
   <div id="page1">
        <iframe align="center" width="100%" height="170" src="page/Page_1.html"  frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
   </div>
   <div id="page2">
        <iframe align="center" width="100%" height="170" src="page/Page_2.html"  frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
   </div>
</body>
```
 

第三种：
```html
<head>
    <object style="border:0px" type="text/x-scriptlet" data="page/Page_1.html" width=100% height=150>
    </object>
</head>
```

第四种：
(新版标准已弃用)
```html
<head>
    <link rel="import" href="page/Page_1.html" id="page1">
</head>
<body>
    <script>
        console.log(page1.import.body.innerHTML);
    </script>
</body>
```
  