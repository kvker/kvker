---
layout: note
title: 最简marquee走马灯替代
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```html
<div class="marquee">
  <div class="marquee-scroll-box">
    <div class="marquee-item">2020-09-27 11:20 用户138****8490充值成功10元1</div>
    <div class="marquee-item">2020-09-27 11:20 用户138****8490充值成功10元2</div>
    <div class="marquee-item">2020-09-27 11:20 用户138****8490充值成功10元3</div>
    <div class="marquee-item">2020-09-27 11:20 用户138****8490充值成功10元4</div>
    <div class="marquee-item">2020-09-27 11:20 用户138****8490充值成功10元1</div>
    <div class="marquee-item">2020-09-27 11:20 用户138****8490充值成功10元2</div>
    <div class="marquee-item">2020-09-27 11:20 用户138****8490充值成功10元3</div>
    <div class="marquee-item">2020-09-27 11:20 用户138****8490充值成功10元4</div>
  </div>
</div>
```

```css
.marquee {
  position: relative;
  height: 88px;
  width: 620px;
  overflow: hidden;
  color: var(--main_color);
  .marquee-scroll-box {
    position: absolute;
    top: 0;
    left: 0;
    animation: marquee 5s linear infinite;
    .marquee-item {
      height: 30px;
      line-height: 24px;
      font-size: 24px;
    }

    @keyframes marquee {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(-50%);
      }
    }
  }
}
```
  