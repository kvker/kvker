---
layout: note
title: CSS小程序uniapp基础库
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```css
* {
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul {
  margin: 0;
  padding: 0;
}

ol,
ul {
  list-style: none;
  padding: 0;
}

html,
body {
  height: 100%;
  margin: 0;
  scroll-behavior: smooth;
}

html,
page {
  --main_length: 400rpx;
  --main_size: 88rpx;
  --main_gray: #d8d8d8;
  --main_grey: #d8d8d8;
  --main_gap: 20rpx;
  --main_color: green;
  --main_orange: #DB6D28;
  --top_color: #999;
  --middle_color: #999;
  --lower_color: #999;
  --bg_color: #F4EFE9;
  --main_radius: 16rpx;
  --main_line: 2rpx solid #999;
  --main_radius: 16rpx;
  color: #333;
  height: 100%;
}

page,
view,
navigator,
scroll-view,
cover-view,
button,
input,
textarea,
form {
  box-sizing: border-box;
}

button,
.btn,
.button,
input,
textarea {
  cursor: pointer;
  outline: none;
  resize: none;
}

input,
textarea {
  cursor: text;
  padding: var(--main_gap);
  width: var(--main_length);
  height: var(--main_size);
  border: var(--main_line);
  border-radius: var(--main_radius);
}

input {
  padding: 0 var(--main_gap);
}

button {
  margin: 0;
  padding: 0;
  background-color: transparent;
}

button:after {
  border: none;
}

button,
.btn,
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: var(--main_size);
  border-radius: calc(var(--main_size) / 2);
  color: white;
  background-color: var(--main_color);
}

/* 定位 */
.relative {
  position: relative;
}

.absolute {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.center {
  left: 50%;
  transform: translateX(-50%);
}

.mask {
  position: fixed;
  top: 0;
  left: 0;
  display: none;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 99;
}

.overflow {
  display      : block;
  overflow     : hidden;
  text-overflow: ellipsis;
  white-space  : nowrap;
}

.overflow2,
.overflow3 {
  display           : -webkit-box;
  -webkit-box-orient: vertical;
  overflow          : hidden;
}

.overflow2 {
  -webkit-line-clamp: 2;
}

.overflow3 {
  -webkit-line-clamp: 3;
}

/* 布局 */
.flex {
  display: flex;
}

.flex-wrap {
  flex-wrap: wrap;
}

.flex-column,
.flex-c {
  display: flex;
  flex-direction: column;
}

.flex.jcfe,
.flex-c.jcfe,
.flex-column.jcfe {
  justify-content: flex-end;
}


.flex.jcsb,
.flex-c.jcsb,
.flex-column.jcsb {
  justify-content: space-between;
}

.flex.jcsa,
.flex-c.jcsa,
.flex-column.jcsa {
  justify-content: space-around;
}

.flex.jcse,
.flex-c.jcse,
.flex-column.jcse {
  justify-content: space-evenly;
}

.flex.jcc,
.flex-c.jcc,
.flex-column.jcc {
  justify-content: center;
}

.flex.aic,
.flex-c.aic,
.flex-column.aic {
  align-items: center;
}

.flex.aifs,
.flex-c.aifs,
.flex-column.aifs {
  align-items: flex-start;
}

.flex.aife,
.flex-c.aife,
.flex-column.aife {
  align-items: flex-end;
}

.f1 {
  flex: 1;
}

.block {
  display: block;
}

.none {
  display: none;
}

.w-10 {
  width: 10%;
}

.w-20 {
  width: 20%;
}

.w-30 {
  width: 30%;
}

.w-40 {
  width: 40%;
}

.w-50 {
  width: 50%;
}

.w-60 {
  width: 60%;
}

.w-70 {
  width: 70%;
}

.w-80 {
  width: 80%;
}

.w-90 {
  width: 90%;
}

.w-100 {
  width: 100%;
}

.h-10 {
  height: 10%;
}

.h-20 {
  height: 20%;
}

.h-30 {
  height: 30%;
}

.h-40 {
  height: 40%;
}

.h-50 {
  height: 50%;
}

.h-60 {
  height: 60%;
}

.h-70 {
  height: 70%;
}

.h-80 {
  height: 80%;
}

.h-90 {
  height: 90%;
}

.h-100 {
  height: 100%;
}

.p-0 {
  padding: 0;
}

.px-0 {
  padding-left: 0;
  padding-right: 0;
}

.py-0 {
  padding-top: 0;
  padding-bottom: 0;
}

.pt-0 {
  padding-top: 0;
}

.pr-0 {
  padding-right: 0;
}

.pb-0 {
  padding-bottom: 0;
}

.pl-0 {
  padding-left: 0;
}

.p-10 {
  padding: 10rpx;
}

.px-10 {
  padding: 0 10rpx;
}

.py-10 {
  padding: 10rpx 0;
}

.pt-10 {
  padding-top: 10rpx;
}

.pr-10 {
  padding-right: 10rpx;
}

.pb-10 {
  padding-bottom: 10rpx;
}

.pl-10 {
  padding-left: 10rpx;
}

.p-20 {
  padding: 20rpx;
}

.px-20 {
  padding: 0 20rpx;
}

.py-20 {
  padding: 20rpx 0;
}

.pt-20 {
  padding-top: 20rpx;
}

.pr-20 {
  padding-right: 20rpx;
}

.pb-20 {
  padding-bottom: 20rpx;
}

.pl-20 {
  padding-left: 20rpx;
}

.p-40 {
  padding: 40rpx;
}

.px-40 {
  padding: 0 40rpx;
}

.py-40 {
  padding: 40rpx 0;
}

.pt-40 {
  padding-top: 40rpx;
}

.pr-40 {
  padding-right: 40rpx;
}

.pb-40 {
  padding-bottom: 40rpx;
}

.pl-40 {
  padding-left: 40rpx;
}

.p-40 {
  padding: 40rpx;
}

.px-80 {
  padding: 0 80rpx;
}

.py-80 {
  padding: 80rpx 0;
}

.pt-80 {
  padding-top: 80rpx;
}

.pr-80 {
  padding-right: 80rpx;
}

.pb-80 {
  padding-bottom: 80rpx;
}

.pl-80 {
  padding-left: 80rpx;
}

.p-160 {
  padding: 160rpx;
}

.px-160 {
  padding: 0 160rpx;
}

.py-160 {
  padding: 160rpx 0;
}

.pt-160 {
  padding-top: 160rpx;
}

.pr-160 {
  padding-right: 160rpx;
}

.pb-160 {
  padding-bottom: 160rpx;
}

.pl-160 {
  padding-left: 160rpx;
}

.mtmg {
  margin-top: var(--main_gap);
}

.mbmg {
  margin-bottom: var(--main_gap);
}

.mlmg {
  margin-left: var(--main_gap);
}

.mrmg {
  margin-right: var(--main_gap);
}

.ptmg {
  padding-top: var(--main_gap);
}

.pbmg {
  padding-bottom: var(--main_gap);
}

.plmg {
  padding-left: var(--main_gap);
}

.prmg {
  padding-right: var(--main_gap);
}

m-0 {
  margin: 0;
}

.mx-0 {
  margin-left: 0;
  margin-right: 0;
}

.my-0 {
  margin-top: 0;
  margin-bottom: 0;
}

.mt-0 {
  margin-top: 0;
}

.mr-0 {
  margin-right: 0;
}

.mb-0 {
  margin-bottom: 0;
}

.ml-0 {
  margin-left: 0;
}

.m-10 {
  margin: 10rpx;
}

.mx-10 {
  margin: 0 10rpx;
}

.my-10 {
  margin: 10rpx 0;
}

.mt-10 {
  margin-top: 10rpx;
}

.mr-10 {
  margin-right: 10rpx;
}

.mb-10 {
  margin-bottom: 10rpx;
}

.ml-10 {
  margin-left: 10rpx;
}

.m-20 {
  margin: 20rpx;
}

.mx-20 {
  margin: 0 20rpx;
}

.my-20 {
  margin: 20rpx 0;
}

.mt-20 {
  margin-top: 20rpx;
}

.mr-20 {
  margin-right: 20rpx;
}

.mb-20 {
  margin-bottom: 20rpx;
}

.ml-20 {
  margin-left: 20rpx;
}

.m-40 {
  margin: 40rpx;
}

.mx-40 {
  margin: 0 40rpx;
}

.my-40 {
  margin: 40rpx 0;
}

.mt-40 {
  margin-top: 40rpx;
}

.mr-40 {
  margin-right: 40rpx;
}

.mb-40 {
  margin-bottom: 40rpx;
}

.ml-40 {
  margin-left: 40rpx;
}

.m-80 {
  margin: 80rpx;
}

.mx-80 {
  margin: 0 80rpx;
}

.my-80 {
  margin: 80rpx 0;
}

.mt-80 {
  margin-top: 80rpx;
}

.mr-80 {
  margin-right: 80rpx;
}

.mb-80 {
  margin-bottom: 80rpx;
}

.ml-80 {
  margin-left: 80rpx;
}

.m-160 {
  margin: 160rpx;
}

.mx-160 {
  margin: 0 160rpx;
}

.my-160 {
  margin: 160rpx 0;
}

.mt-160 {
  margin-top: 160rpx;
}

.mr-160 {
  margin-right: 160rpx;
}

.mb-160 {
  margin-bottom: 160rpx;
}

.ml-160 {
  margin-left: 160rpx;
}

/* 字体 */
.min-font-size {
  font-size: 24rpx;
}

/* 背景 */
.bg-white {
  background-color: white;
}

/* 颜色 */
.color-3 {
  color: var(--top_color);
}

.color-6 {
  color: var(--middle_color);
}

.color-9 {
  color: var(--lower_color);
}

.color-white {
  color: white;
}

.container {
  padding: 16rpx;
  height: 100%;
}

.cp {
  cursor: pointer;
}

.border {
  border: var(--main_line);
}

.border-radius {
  border-radius: var(--main_radius);
}

/* 方块 */
.square {
  width: var(--main_size);
  height: var(--main_size);
}

/* 全屏 */
.full-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.text-black {
  color: black;
}

.text-left {
  text-align: left;
}

.text-center {
  text-align: center;
}

.text-right {
  text-align: right;
}

.line {
  width: 100%;
  border-top: 2rpx solid var(--main_grey);
  margin: var(--main_gap) 0;
}
```
  