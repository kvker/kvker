---
layout: note
title: CSS与JS关于supports
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

CSS

常规 @supports

```css
@supports(display: flex) {
    div {
        display: flex;
    }
}
```
not 语法
```css
@supports not(display: flex) {
    div {
        display: block;
    }
}
```
条件语法, 可以括号

```css
@supports(display: flex1) or
(display: flex2) and
(display: flex3) {
    div {
        display: block;
    }
}
```
JS

常规

`let supportsFlex = CSS.supports("display","flex")`
条件

`let supportsFlexAndAppearance = CSS.supports("(display: flex) and (-webkit-appearance: caret)")`
特殊浏览器语法兼容

`let supportsCSS =!!((window.CSS && window.CSS.supports)|| window.supportsCSS ||false)`

  