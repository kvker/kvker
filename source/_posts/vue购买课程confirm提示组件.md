---
layout: note
title: vue购买课程confirm提示组件
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```html
<template>
  <div class="mask">
    <div class="box">
      <div class="title">购买须知</div>
      <div class="content">
        购买课程后一个账号限登录三台设备并仅限本人学习、不能转让或者转租给他人使用。若转租或者转让后，本账号发现盗版等非法行为，全部法律责任由本账号户主承担。
      </div>
      <div class="ctrls">
        <button class="ctrl highlight" @click="$emit('confirm')">同意</button>
        <button class="ctrl" @click="$emit('cancel')">不同意</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.mask {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: #0003;
  color: #666;
  .box {
    width: 300px;
    height: 300px;
    background: white;
    border-radius: 2px;
    padding: 20px;
    padding-top: 0;
    box-sizing: border-box;
  }
  .title {
    text-align: center;
    line-height: 64px;
    border-bottom: 1px solid #ddd;
  }
  .content {
    text-align: center;
    padding: 20px 0;
    font-size: 12px;
    line-height: 20px;
  }
  .ctrls {
    .ctrl {
      display: block;
      margin-top: 10px;
      width: 100%;
      height: 40px;
      border: 1px solid #ddd;
      background: transparent;
      box-sizing: border-box;
      color: #999;
      cursor: pointer;
      &:first-child {
        border: 0;
        background: #00bda5;
        color: white;
      }
    }
  }
}
</style>
```
  