---
layout: note
title: JS打印页面或局部
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
/**
 * 打印当前页面
 */
function printpage() {
    window.print();
}

/**
 * 打印局部div
 * @param printpage 局部div的ID
 */
function printdiv(printpage) {
    var headhtml = "<html><head><title></title></head><body>";
    var foothtml = "</body>";
    // 获取div中的html内容
    var newhtml = document.all.item(printpage).innerHTML;

    // 获取原来的窗口界面body的html内容，并保存起来
    var oldhtml = document.body.innerHTML;

    // 给窗口界面重新赋值，赋自己拼接起来的html内容
    document.body.innerHTML = headhtml + newhtml + foothtml;
    // 调用window.print方法打印新窗口
    window.print();

    // 将原来窗口body的html值回填展示
    document.body.innerHTML = oldhtml;
    return false;
}

// 不影响当前布局的情况下，打印对应内容
let wind = window.open("", 'newwindow', 'height=800, width=700, top=0, left=500, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=n o, status=no')
wind.document.body.innerHTML = `<style>.Noprint{display: none;}</style>` + document.querySelector('#print-this').outerHTML
wind.print()
```
  