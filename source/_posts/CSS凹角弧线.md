---
layout: note
title: CSS凹角弧线
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

<style>
#a {
    width: 150px;
    height: 300px;
    background: radial-gradient(circle at top left,
    transparent 15px, #e6e4b7 0) top left,
    radial-gradient(circle at top right,
            transparent 15px, #e6e4b7 0) top right,
    radial-gradient(circle at bottom right,
            transparent 15px, #e6e4b7 0) bottom right,
    radial-gradient(circle at bottom left,
            transparent 15px, #e6e4b7 0) bottom left;
    background-size: 50% 50%;
    background-repeat: no-repeat;
    padding: 20px 24px 22px 20px;
}
#b {
    display: block;
    background: radial-gradient(circle at top left,
    transparent 15px, red 0) top left,
    radial-gradient(circle at top right,
            transparent 15px, red 0) top right,
    radial-gradient(circle at bottom right,
            transparent 15px, red 0) bottom right,
    radial-gradient(circle at bottom left,
            transparent 15px, red 0) bottom left;
    background-size: 50% 50%;
    background-repeat: no-repeat;
    width:100%;
    height: 100%;
    padding: 2px;
}
#b:before {
    content: "";
    width: 100%;
    height: 100%;
    display: block;
    background: radial-gradient(circle at top left,
    transparent 15px, #e6e4b7 0) top left,
    radial-gradient(circle at top right,
            transparent 15px, #e6e4b7 0) top right,
    radial-gradient(circle at bottom right,
            transparent 15px, #e6e4b7 0) bottom right,
    radial-gradient(circle at bottom left,
            transparent 15px, #e6e4b7 0) bottom left;
    background-size: 50% 50%;
    background-repeat: no-repeat;
}
</style>

<div id="a">
  <div id="b"></div>
</div>

```html
<style>
#a {
    width: 150px;
    height: 300px;
    background: radial-gradient(circle at top left,
    transparent 15px, #e6e4b7 0) top left,
    radial-gradient(circle at top right,
            transparent 15px, #e6e4b7 0) top right,
    radial-gradient(circle at bottom right,
            transparent 15px, #e6e4b7 0) bottom right,
    radial-gradient(circle at bottom left,
            transparent 15px, #e6e4b7 0) bottom left;
    background-size: 50% 50%;
    background-repeat: no-repeat;
    padding: 20px 24px 22px 20px;
}
#b {
    display: block;
    background: radial-gradient(circle at top left,
    transparent 15px, red 0) top left,
    radial-gradient(circle at top right,
            transparent 15px, red 0) top right,
    radial-gradient(circle at bottom right,
            transparent 15px, red 0) bottom right,
    radial-gradient(circle at bottom left,
            transparent 15px, red 0) bottom left;
    background-size: 50% 50%;
    background-repeat: no-repeat;
    width:100%;
    height: 100%;
    padding: 2px;
}
#b:before {
    content: "";
    width: 100%;
    height: 100%;
    display: block;
    background: radial-gradient(circle at top left,
    transparent 15px, #e6e4b7 0) top left,
    radial-gradient(circle at top right,
            transparent 15px, #e6e4b7 0) top right,
    radial-gradient(circle at bottom right,
            transparent 15px, #e6e4b7 0) bottom right,
    radial-gradient(circle at bottom left,
            transparent 15px, #e6e4b7 0) bottom left;
    background-size: 50% 50%;
    background-repeat: no-repeat;
}
</style>

<div id="a">
  <div id="b"></div>
</div>
```
  