---
layout: note
title: CSS缩写整理
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

CSS缩写总结

1、16进制的色彩值，如果每两位的值相同，可以缩写一半。如：

color: #ffffff => color: #fff

color: #aabbcc => color: #abc

2、边框语法糖

边框：

border: width style color; => border: (边宽) (样式) (颜色);

如：border: 1px solid #000;

无边框可直接写：border: none

border-top / -bottom / -left / -right 也是一样的

边框图片：

border-image: source slice / width / outset repeat; =>

border-image：（图片）（裁切区域）/（边框图片宽度）/（扩散）（拉伸或平铺）

如：border-image: url(button.png) 0 14 0 14 stretch;

3、背景语法糖
background: color image repeat attachment position; => backgroud: (颜色) (图片路径) (重复) (固定) (位置);

如：background: #fff url('image.png') no-repeat fixed center;

CSS3新写法：

background: color image repeat attachment position/size origin clip;

=> background:size(图片大小) origin(定位区域) clip(裁剪)

4、字体语法糖
缩写字体定义，至少要定义font-size和font-family两个值

font: style variant weight size/line-height family => font: (样式) (异体) (粗细) (大小)/(行高) (字体)

5、列表
list的属性缩写: list-style-type:square; list-style-position:inside; list-style-image:url(image.png); => list-style: square inside url(image.png);

取消默认的圆点或序号可以直接写list-style:none;

6、flex 伸缩布局
flex-flow: direction wrap; => flex-flow: (排列方向) (换行方式);

flex: grow shrink basis; => flex: (项目的放大比例) (项目的缩小比例) (项目占据的主轴空间);

flex属性有两个快捷值：flex: auto; => flex:1 1 auto 和 flex: none; => flex: 0 0 aut
  