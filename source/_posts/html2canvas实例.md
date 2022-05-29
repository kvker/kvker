---
layout: note
title: html2canvas实例
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

**图片会存在跨域问题**

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>截图测试</title>
        <style type="text/css">
            canvas {
                display: none;
            }
        </style>
    </head>
    <body>
        <button onclick="callback()">123</button>
        <div id="root">123</div>
        <img src="css/Jcrop.gif"/>
        <script src="js/html2canvas.min.js" type="text/javascript" charset="utf-8"></script>
        <script type="text/javascript">
            function callback() {
                html2canvas(document.body).then(function(canvas) {
                    canvas.id = 'screenshotCanvas';
                    document.body.appendChild(canvas);
                    var can = document.getElementById("screenshotCanvas");
                    var imgDataURI = can.toDataURL('image/png', 1);
                    console.log(imgDataURI)
                    document.getElementsByTagName("img")[0].src = imgDataURI
                    if (document.getElementById('screenshotCanvas')) document.body.removeChild(document.getElementById('screenshotCanvas'))
                })
            }
        </script>
    </body>
</html>
```
  