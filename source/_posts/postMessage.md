---
layout: note
title: PostMessage
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

发送程序
```html
<!DOCTYPE HTML>
<html>
<head>
    <meta charset="utf-8">
    <title>42度空间-window.postMessage()跨域消息传递</title>
</head>
<body>
<div>
    <input id="text" type="text" value="42度空间" />
    <button id="send" >发送消息</button>
</div>
<iframe id="receiver" src="http://res.42du.cn/static/html/receiver.html" width="500" height="60">
    <p>你的浏览器不支持IFrame。</p>
</iframe>
<script>
  window.onload = function() {
    var receiver = document.getElementById('receiver').contentWindow
    var btn = document.getElementById('send')
    btn.addEventListener('click', function (e) {
      e.preventDefault()
      var val = document.getElementById('text').value
      receiver.postMessage("Hello "+val+"！", "http://res.42du.cn")
    })
  }
</script>
</body>
</html>
```

接收程序
```html
<!DOCTYPE HTML>
<html>
<head>
    <meta charset="utf-8">
    <title>42度空间-从www.42du.cn接收消息</title>
</head>
<body>
<div id="message">
    Hello World!
</div>
<script>
  window.onload = function() {
    var messageEle = document.getElementById('message')
    window.addEventListener('message', function (e) {
      alert(e.origin)
      if (e.origin !== "http://www.42du.cn") {
        return
      }
      messageEle.innerHTML = "从"+ e.origin +"收到消息： " + e.data
    })
  }
</script>
</body>
</html>
```
  