---
layout: note
title: canvas圆环动画
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
<template>
  <section class="container">
    <img src="~@/assets/icon/home_font_icon.png" class="top-font" alt="homepage_font.png" />
    <p
      class="summary"
    >A product designer from England, who focuses on interactive design & A freelance designer focusing on typography & clean interfaces. Also works in Google.</p>
    <nav class="navs" ref="navs">
      <div class="nav-item">
        <a href="#list" @mouseover="hoverNavItem(0)" @mouseleave="cleanCircle(0)">
          <img src="~@/assets/icon/list_icon.png" alt="nav_icon" />
          <img src="~@/assets/icon/list_hover_icon.png" alt="nav_icon" />
          <div class="border"></div>
        </a>
        <p>list</p>
      </div>
      <div class="nav-item">
        <a href="#sale_state" @mouseover="hoverNavItem(1)" @mouseleave="cleanCircle(1)">
          <img src="~@/assets/icon/safe_icon.png" alt="nav_icon" />
          <img src="~@/assets/icon/list_hover_icon.png" alt="nav_icon" />
          <div class="border"></div>
        </a>
        <p>Safe state</p>
      </div>
      <div class="nav-item">
        <a
          href="https://cheatninja.com/"
          target="_blank"
          @mouseover="hoverNavItem(2)"
          @mouseleave="cleanCircle(2)"
        >
          <img src="~@/assets/icon/download_icon.png" alt="nav_icon" />
          <img src="~@/assets/icon/list_hover_icon.png" alt="nav_icon" />
          <div class="border"></div>
        </a>
        <p>download</p>
      </div>
      <div class="nav-item">
        <a
          href="/telegram"
          target="_blank"
          @mouseover="hoverNavItem(3)"
          @mouseleave="cleanCircle(3)"
        >
          <img src="~@/assets/icon/forum_icon.png" alt="nav_icon" />
          <img src="~@/assets/icon/list_hover_icon.png" alt="nav_icon" />
          <div class="border"></div>
        </a>
        <p>forum</p>
      </div>
      <div class="nav-item">
        <a href="#forum" @mouseover="hoverNavItem(4)" @mouseleave="cleanCircle(4)">
          <img src="~@/assets/icon/telegram_icon.png" alt="nav_icon" />
          <img src="~@/assets/icon/list_hover_icon.png" alt="nav_icon" />
          <div class="border"></div>
        </a>
        <p>telegram channel</p>
      </div>
      <div class="nav-item">
        <a href="#about" @mouseover="hoverNavItem(5)" @mouseleave="cleanCircle(5)">
          <img src="~@/assets/icon/about_icon.png" alt="nav_icon" />
          <img src="~@/assets/icon/list_hover_icon.png" alt="nav_icon" />
          <div class="border"></div>
        </a>
        <p>About/Contact Us</p>
      </div>
      <canvas ref="circle_canvas" width="256" height="256"></canvas>
    </nav>
  </section>
</template>

<script>
let ctx
  , canvas
  , canvas_frame = 0
  , canvas_width = 256
  , animation_frame
export default {
  mounted() {
    canvas = this.$refs.circle_canvas
    canvas.width = canvas_width
    canvas.height = canvas_width
    ctx = canvas.getContext('2d')
  },
  methods: {
    hoverNavItem(idx) {
      let nav_items = this.$refs.navs.children
      let current_a = nav_items[idx].children[0]
      let rect = current_a.getBoundingClientRect()
      let radius = canvas_width / 2
      canvas.style.left = rect.x - radius / 2 + 'px'
      canvas.style.top = rect.y - radius / 2 + 'px'
      this.drawCircle()
    },
    drawCircle() {
      canvas_frame += Math.PI / 45
      // 刚好是封不满的, 所以加一点
      let is_fill = canvas_frame > Math.PI * 2 + 0.3
      if(is_fill) {
        return
      }
      let radius = canvas_width / 2
      let small_radius = 6
      // 画线
      ctx.beginPath()
      ctx.arc(radius, radius, radius - small_radius, 0, is_fill > Math.PI * 2 ? Math.PI * 2 : canvas_frame)
      ctx.strokeStyle = '#ff8500'
      ctx.lineWidth = small_radius * 2
      ctx.stroke()
      // 圆角
      ctx.beginPath()
      ctx.arc(2 * radius - small_radius, radius - small_radius / 2, small_radius, 0, Math.PI * 2)
      ctx.fillStyle = '#ff8500'
      ctx.fill()
      animation_frame = requestAnimationFrame(this.drawCircle)
    },
    cleanCircle(idx) {
      if(cancelAnimationFrame(animation_frame)) {
        cancelAnimationFrame(animation_frame)
      }
      canvas_frame = 0
      ctx.clearRect(0, 0, canvas_width, canvas_width)
    },
  }
}
</script>

<style lang="less" scoped>
@color: #ff8500;
@black: #050b28;

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: @black;
  width: 100%;
  height: 100vh;
}
.top-font {
  width: 792px;
  height: 108px;
}
.summary {
  width: 1370px;
  height: 96px;
  font-size: 28px;
  font-family: PingFangTC-Semibold, PingFangTC;
  font-weight: 600;
  color: rgba(255, 255, 255, 1);
  line-height: 40px;
  letter-spacing: 1px;
  margin: 50px 0 100px;
}
.navs {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .nav-item {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    margin-bottom: 60px;
    &:nth-child(3n + 3) {
      margin-right: 0;
    }
    &:nth-child(n + 4) {
      margin-bottom: 0;
    }
    a {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 128px;
      height: 128px;
      border-radius: 50%;
      &:hover {
        cursor: none;

        & + p {
          color: @color;
        }

        img:nth-child(1) {
          display: none;
        }
        img:nth-child(2) {
          display: inline;
        }
        .border {
          border: 0;
        }
      }
      img {
        width: 72px;
        height: 72px;
        &:nth-child(2) {
          display: none;
        }
      }
      .border {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 2px solid white;
        border-radius: 50%;
        z-index: 0;
      }
    }
    p {
      font-size: 24px;
      font-family: DINAlternate-Bold, DINAlternate;
      font-weight: bold;
      color: white;
      line-height: 28px;
      letter-spacing: 1px;
      margin-top: 24px;
    }
  }
}
canvas {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  transform: scale(0.5, 0.5) rotateZ(-90deg);
  transform-origin: 50% 50%;
}
</style>
```
  