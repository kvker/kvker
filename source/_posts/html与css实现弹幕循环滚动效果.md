---
layout: note
title: html与css实现弹幕循环滚动效果
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```html
<div class="danmu-float-box" v-if="sfpj.length" :style="{top: danmu_show ? '330px' : '4000px'}">
      <div class="danmu-box" v-once>
        <div
          class="danmu"
          :style="{top: ~~(Math.random() * 350) + 'px',left: ~~(Math.random() * 2000) + 'px'}"
          v-for="(item, idx) of sfpj"
          :key="idx"
        >{{item.comment}}</div>
      </div>
      <div class="danmu-box" v-once>
        <div
          class="danmu"
          :style="{top: ~~(Math.random() * 350) + 'px',left: ~~(Math.random() * 2000) + 'px'}"
          v-for="(item, idx) of sfpj"
          :key="idx"
        >{{item.comment}}</div>
      </div>
    </div>
```

```css
@keyframes scroll-danmu {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-4000px);
  }
}

@keyframes scroll-danmu1 {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-4000px);
  }
}

.danmu-float-box {
  position: fixed;
  top: 330px;
  left: 0;
  width: 100%;
  height: 380px;
  background: rgba(0, 160, 233, 0.2);
  overflow: hidden;
  z-index: 100;
  &:hover {
    .danmu-box {
      animation-play-state: paused;
    }
  }
}

.danmu-box {
  position: absolute;
  top: 0;
  left: 2000px;
  animation: 40s scroll-danmu linear infinite;
  z-index: 99;
}

.danmu-box:last-child {
  animation-delay: 20s;
}

.danmu {
  position: absolute;
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: white;
  font-size: 24px;
  font-weight: bold;
}
```
  