---
layout: note
title: vue与canvas绘制时钟
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

# 利用Vue特性与Cavnas的API绘制简易时钟

模块作用域、computed的灵活运用，以及CSS的border边框处理。

## 实例代码

从template，到css，再到详细的js逻辑代码。

### html

里面放置一个canvas，我们假设宽高都是200px，则：

`<canvas class="clock" width="200" height="200" ref="canvas"></canvas>`

### css

```css
.canvas {
  border-radius: 50%;
  border: 2px dashed #000;
}
```

这里主要是利用了css天然的dashed虚线边框来模拟时钟的刻度。

### js

data
```js
data() {
  return {
    // 动态变化，从而触发时钟效果
    date: null,
  }
},
```

这里使用一个date的data来控制变化，从而自动触发与之相关的computed字段，并在computed里面触发绘制函数。

---

computed
```js
computed: {
  /**
    * 根据时区计算显示时间
    */
  time() {
    let date = this.date
    // 处理首次报错问题
    if(!date) return {}
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let hours = date.getHours()
    // 注意这里提供一个变量传入函数
    let result = {
      hours,
      minutes,
      seconds,
    }
    this.drawCanvas(result)
    return result
  },
},
```

这里需要注意，最好像上面那样提供一个result变量，传给函数用，否则就可能在函数里面再次调用`this.time`，那这样就死循环了。

---

methods

```js
// 这里利用模块变量抓取一次性DOM或变量
let canvas, ctx

export default {
  mounted() {
    this.date = new Date()
    setInterval(() => {
      this.date = new Date()
    }, 1000)
  },
  methods: {
    drawCanvas(date) {
      // 第一条线，时
      const width = canvas.width, height = canvas.height, half = width / 2, PI2 = Math.PI * 2
      ctx.clearRect(0, 0, width, height)
      ctx.save()
      ctx.fillStyle = 'black'
      ctx.translate(half, half)
      ctx.rotate(PI2 * date.hours / 12)
      ctx.moveTo(- 4, 0)
      ctx.lineTo(4, 0)
      ctx.lineTo(0, -70)
      ctx.closePath()
      ctx.fill()
      ctx.restore()
      // // 第二条线，分
      ctx.save()
      ctx.translate(half, half)
      ctx.rotate(PI2 * date.minutes / 60)
      ctx.moveTo(- 2, 0)
      ctx.lineTo(+ 2, 0)
      ctx.lineTo(0, -80)
      ctx.closePath()
      ctx.fill()
      ctx.restore()
      // 第三条线，秒
      ctx.save()
      ctx.strokeStyle = 'orange'
      ctx.translate(half, half)
      ctx.rotate(PI2 * date.seconds / 60)
      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.lineTo(0, -90)
      ctx.stroke()
      ctx.restore()
    },
  },
}
```

上面注意两点：

1. 如果有些变量或DOM，只会获取一次，并且与$vue实例无关，那么可以考虑放在模块变量中，不用什么都绑定在data上，算是一种分工优化。
2. canvas的save与restore在这里使用是非常重要的东西。

其他就是常规的代码计算与逻辑。

无外乎，mounted时候主动触发一个`this.date`的值，并且后面每秒获取一次，这样就可以触发`this.date`这个computed，于是有触发绘制函数drawCanvas，一条线下来，相当于纯自动，感觉还是很棒的。
