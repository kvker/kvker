---
layout: note
title: CSS颜表情
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```html
<div class="head">
  <!-- 草 -->
  <div class="grass">
    <div class="grass-inner"></div>
  </div>
  <div class="face">
    <div class="eyes">
      <div class="eyes-left"></div>
      <div class="eyes-right"></div>
    </div>
    <div class="nose">
      <div class="nose-left"></div>
      <div class="nose-right"></div>
    </div>
    
    <!-- 脸蛋 -->
    <div class="cheek"></div>
  </div>
</div>
```

```css
* {
  box-sizing: border-box;
}

a {
  text-decoration: none;
  border-bottom: 1px solid;
}

h1 {
  text-align: center;
  color: #923a21;
}

.head {
  position: relative;
  width: 440px;
  height: 410px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 90px;
}

.face {
  position: relative;
  z-index: 10;
  width: 100%;
  height: 100%;
  border: 12px solid #783723;
  background-color: #fff;
  border-radius: 48.5% 49% 48% 47.5%;
}

.eyes > div {
  width: 46px;
  height: 46px;
  position: absolute;
  z-index: 20;
  top: 180px;
  background-color: #783723;
  border-radius: 40px 43px 42px 40px;
  &:after {
    content: '';
    width: 36px;
    height: 8px;
    position: absolute;
    border-radius: 99px;
    background-color: #783723;
  }
}

.eyes {
  &>div {
    border-top: 22px solid #fff;
    border-bottom: 22px solid #fff;
    animation: blink-eyes 4s ease-in-out both infinite;
  }
  .eyes-left {
    left: 110px;
    width: 44px;
    &:after {
      transform: rotate(19deg);
      top: -16px;
      left: 8px;
    }
  }
  .eyes-right {
    left: 270px;
    top: 176px;
    &:after {
      transform: rotate(-30deg);
      left: -6px;
      top: -10px;
      width: 34px;
    }
  }
}

.grass {
  animation: rotate .8s infinite ease;
  transform-origin: 50% 100%;
  position: absolute;
  left: 70px;
  top: 5px;
  z-index: 1;
  transform: rotate(-32deg);
  &:after,
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    z-index: 1;
    background-color: #83d456;
    border: 8px solid #844728;
    border-radius: 100% 0 60% 50% / 60% 0 100% 50%;
  }
  &:after {
    width: 55px;
    height: 45px;
    transform: rotate(140deg);
    top: -75px;
    left: -33px;
  }
  &:before {
    width: 50px;
    height: 48px;
    transform: rotate(60deg);
    top: -45px;
    left: -80px;
  }
  .grass-inner {
    width: 50px;
    height: 70px;
    border: 10px solid #844728;
    border-radius: 0 100% 0 0;
    border-bottom-width: 0px;
    border-top-width: 8px;
    border-left-width: 0;
    position: absolute;
    top: -20px;
    left: -33px;
  }
}

.nose {
  position: absolute;
  width: 100px;
  top: 185px;
  left: 167px;
  font-size: 0;
  &:after {
    content: '';
    position: absolute;
    height: 40px;
    width: 100%;
    background-color: #fff;
    left: 0;
    top: -16px;
    transform: rotate(2deg);
    border-radius: 50%;
  }
  &>div {
    width: 50px;
    height: 50px;
    border: 10px solid #723a21;
    border-radius: 999px;
    display: inline-block;
    position: relative;
    &:after,
    &:before {
      content: '';
      display: inline-block;
      position: absolute;
      z-index: 30;
      width: 10px;
      height: 10px;
      border-radius: 99px;
      background-color: #723a21;
    }
  }
  .nose-left {
    margin-right: -10px;
    &:after {
      left: -6px;
      top: -2px;
    }
    &:before {
      left: 30px;
      top: 9px;
    }
  }
  .nose-right {
    &:after {
      content: none;
    }
    &:before {
      left: 30px;
      top: 6px;
    }
  }
}

.cheek {
  &:after,
  &:before {
    content: '';
    position: absolute;
    top: 230px;
    left: 80px;
    width: 45px;
    height: 30px;
    border-radius: 50%;
    background-color: #fdc9b1;
    transform: rotate(2deg);
  }
  &:after {
    margin-left: 220px;
    margin-top: -5px;
    width: 48px;
    height: 30px;
    transform: rotate(-15deg);
  }
}

@keyframes rotate {
  0%,
  100% {
    transform: rotate(-32deg);
  }
  33% {
    transform: rotate(-25deg);
  }
  66% {
    transform: rotate(-39deg);
  }
}

@keyframes eyebrows-left {
  50% {
    transform: rotate(29deg);
  }
}

@keyframes eyebrows-right {
  50% {
    transform: rotate(-40deg);
  }
}

.eyes-left:after {
  animation: eyebrows-left .5s infinite ease both;
  transform-origin: 100% 50%;
  animation-timing-function: cubic-bezier(0, 1.01, 0.15, 1.32);
}

.eyes-right:after {
  animation: eyebrows-right .5s infinite ease both;
  transform-origin: 0% 50%;
  animation-timing-function: cubic-bezier(0, 1.01, 0.15, 1.32);
}

@keyframes blink-eyes {
  0%,
  9%,
  13%,
  37%,
  41%,
  100% {
    border-top-width: 0;
    border-bottom-width: 0;
  }
  10%,
  12%,
  38%,
  40% {
    border-top-width: 21px;
    border-bottom-width: 21px;
    border-radius: 50%;
  }
}
```
  