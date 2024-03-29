---
layout: note
title: CSS样式基础库
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```css
@media (max-width: 800px) {

    html,
    body,
    page,
    .page {
      margin: 0 auto;
      max-width: 420px;
      height: 100%;
    }

    ::-webkit-scrollbar {
      display: none;
    }
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul,
  figure,
  .body,
  .h1,
  .h2,
  .h3,
  .h4,
  .h5,
  .h6,
  .p,
  .ol,
  .ul,
  .figure {
    margin: 0;
    padding: 0;
  }

  ol,
  ul,
  .ol,
  .ul {
    padding: 0;
    list-style: none;
  }

  html,
  body,
  page,
  .page {
    scroll-behavior: smooth;
  }

  html,
  page,
  .page {
    --main_length: 200px;
    --main_size: 44px;
    --main_gray: #d8d8d8;
    --main_grey: #d8d8d8;
    --main_gap: 10px;
    --main_color: #ffc61e;
    --main_orange: #db6d28;
    --top_color: #333;
    --middle_color: #666;
    --low_color: #999;
    --bg_color: #f7f7f7;
    --main_radius: 8px;
    --main_line: 1px solid #999;

    height: 100%;
    color: var(--top_color);
  }

  header,
  main,
  footer,
  .header,
  .main,
  .footer {
    width: 100%;
  }

  view,
  div,
  button,
  .btn,
  .button,
  input,
  textarea,
  .textarea {
    box-sizing: border-box;
    outline: none;
    border: none;
    resize: none;
    cursor: pointer;
  }

  input,
  .input,
  textarea,
  .textarea {
    padding: var(--main_gap);
    height: var(--main_size);
    border: var(--main_line);
    border-radius: var(--main_radius);
    cursor: text;
  }

  input,
  .input {
    padding: 0 var(--main_gap);
  }

  button,
  .button {
    margin: 0;
    padding: 0;
    background-color: transparent;
  }

  img,
  image,
  .img,
  .image {
    vertical-align: top;

    object-fit: cover;
  }

  .placeholder {
    padding-bottom: 44px;
    background-color: white;
  }

  .mask {
    position: fixed;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    opacity: 0;
    transition: opacity 0.3s linear;
  }

  .mask.mask-show {
    top: 0;
    opacity: 1;
  }

  .hidden {
    display: none !important;
  }

  .opacity {
    visibility: hidden !important;
  }

  /* 定位 */
  .relative {
    position: relative;
  }

  .absolute {
    position: absolute;
  }

  .center {
    left: 50%;
    transform: translateX(-50%);
  }

  .f-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .overflow {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .overflow2,
  .overflow3 {
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
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

  .border-none {
    border: none;
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
    padding-right: 0;
    padding-left: 0;
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
    padding: 10px;
  }

  .px-10 {
    padding: 0 10px;
  }

  .py-10 {
    padding: 10px 0;
  }

  .pt-10 {
    padding-top: 10px;
  }

  .pr-10 {
    padding-right: 10px;
  }

  .pb-10 {
    padding-bottom: 10px;
  }

  .pl-10 {
    padding-left: 10px;
  }

  .p-20 {
    padding: 10px;
  }

  .px-20 {
    padding: 0 10px;
  }

  .py-20 {
    padding: 10px 0;
  }

  .pt-20 {
    padding-top: 10px;
  }

  .pr-20 {
    padding-right: 10px;
  }

  .pb-20 {
    padding-bottom: 10px;
  }

  .pl-20 {
    padding-left: 10px;
  }

  .p-40 {
    padding: 40px;
  }

  .px-40 {
    padding: 0 40px;
  }

  .py-40 {
    padding: 40px 0;
  }

  .pt-40 {
    padding-top: 40px;
  }

  .pr-40 {
    padding-right: 40px;
  }

  .pb-40 {
    padding-bottom: 40px;
  }

  .pl-40 {
    padding-left: 40px;
  }

  .p-40 {
    padding: 40px;
  }

  .px-80 {
    padding: 0 80px;
  }

  .py-80 {
    padding: 80px 0;
  }

  .pt-80 {
    padding-top: 80px;
  }

  .pr-80 {
    padding-right: 80px;
  }

  .pb-80 {
    padding-bottom: 80px;
  }

  .pl-80 {
    padding-left: 80px;
  }

  .p-160 {
    padding: 160px;
  }

  .px-160 {
    padding: 0 160px;
  }

  .py-160 {
    padding: 160px 0;
  }

  .pt-160 {
    padding-top: 160px;
  }

  .pr-160 {
    padding-right: 160px;
  }

  .pb-160 {
    padding-bottom: 160px;
  }

  .pl-160 {
    padding-left: 160px;
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

  .m-0 {
    margin: 0;
  }

  .mx-0 {
    margin-right: 0;
    margin-left: 0;
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
    margin: 10px;
  }

  .mx-10 {
    margin: 0 10px;
  }

  .my-10 {
    margin: 10px 0;
  }

  .mt-10 {
    margin-top: 10px;
  }

  .mr-10 {
    margin-right: 10px;
  }

  .mb-10 {
    margin-bottom: 10px;
  }

  .ml-10 {
    margin-left: 10px;
  }

  .m-20 {
    margin: 10px;
  }

  .mx-20 {
    margin: 0 10px;
  }

  .my-20 {
    margin: 10px 0;
  }

  .mt-20 {
    margin-top: 10px;
  }

  .mr-20 {
    margin-right: 10px;
  }

  .mb-20 {
    margin-bottom: 10px;
  }

  .ml-20 {
    margin-left: 10px;
  }

  .m-40 {
    margin: 40px;
  }

  .mx-40 {
    margin: 0 40px;
  }

  .my-40 {
    margin: 40px 0;
  }

  .mt-40 {
    margin-top: 40px;
  }

  .mr-40 {
    margin-right: 40px;
  }

  .mb-40 {
    margin-bottom: 40px;
  }

  .ml-40 {
    margin-left: 40px;
  }

  .m-80 {
    margin: 80px;
  }

  .mx-80 {
    margin: 0 80px;
  }

  .my-80 {
    margin: 80px 0;
  }

  .mt-80 {
    margin-top: 80px;
  }

  .mr-80 {
    margin-right: 80px;
  }

  .mb-80 {
    margin-bottom: 80px;
  }

  .ml-80 {
    margin-left: 80px;
  }

  .m-160 {
    margin: 160px;
  }

  .mx-160 {
    margin: 0 160px;
  }

  .my-160 {
    margin: 160px 0;
  }

  .mt-160 {
    margin-top: 160px;
  }

  .mr-160 {
    margin-right: 160px;
  }

  .mb-160 {
    margin-bottom: 160px;
  }

  .ml-160 {
    margin-left: 160px;
  }

  /* 字体 */
  .font-size-min {
    font-size: 12px;
  }

  .font-bold,
  .bold {
    font-weight: 800;
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
    padding: 8px;
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
    border-top: 1px solid var(--main_grey);
  }

  .line-transparent {
    border-top: 1px solid transparent;
  }
```
  