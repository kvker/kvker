---
layout: note
title: echarts柱状图电梯图
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

原理，挂载同一个stack下面，叠加三个数据，中间的数据为固定值，作为电梯演示

init
```js
let main_color = '#67A8FF'
let orange_color = '#ff7800'
let data_0 = bar_chart_data.map((i) => i.floorStart)
let data_1 = bar_chart_data.map(() => 1) // 一层代表电梯
let data_2 = bar_chart_data.map((i) => i.floorCount - i.floorStart - 1)
no_motion = bar_chart_data.every((i) => !i.showMotion)
// console.log(no_motion)
this.echarts_bar_instance = echarts.init(this.$refs.bar_line_chart)
let option = {
  animationDuration: 0,
  animationDurationUpdate: bar_motion_duration,
  xAxis: {
    type: 'category',
    data: Array.from({ length: bar_chart_data.length }).map((i, index) => index + 1),
    axisLabel: {
      color: main_color,
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: main_color,
      },
    },
  },
  yAxis: {
    type: 'value',
    axisLine: {
      show: true,
      lineStyle: {
        color: main_color,
      },
    },
    axisLabel: {
      color: main_color,
    },
    splitLine: {
      show: false,
    },
  },
  grid: {
    top: 20,
    left: 60,
    right: 60,
    bottom: 30,
  },
  series: [
    {
      data: data_0,
      type: 'bar',
      stack: 'total',
      lineStyle: {
        color: orange_color,
      },
      itemStyle: {
        normal: {
          color: main_color,
        },
      },
    },
    {
      type: 'bar',
      stack: 'total',
      itemStyle: {
        normal: {
          color: orange_color,
        },
      },
      data: data_1,
    },
    {
      data: data_2,
      type: 'bar',
      stack: 'total',
      lineStyle: {
        color: orange_color,
      },
      itemStyle: {
        normal: {
          color: main_color,
        },
      },
    },
  ],
}
```

update
```js
let data_0 = bar_chart_data.map((i) => {
  if (i.showMotion) return has_motion ? i.floorStart : i.floorEnd
  else return i.floorStart
})

let data_1 = bar_chart_data.map(() => 1) // 一层代表电梯
let data_2 = bar_chart_data.map((i) => {
  if (i.showMotion) return has_motion ? i.floorCount - i.floorStart - 1 : i.floorCount - i.floorEnd - 1
  else return i.floorCount - i.floorStart - 1
})
// console.log(data_0, data_1, data_2)
let option = {
  series: [
    {
      data: data_0,
    },
    {
      data: data_1,
    },
    {
      data: data_2,
    },
  ],
}
```
  