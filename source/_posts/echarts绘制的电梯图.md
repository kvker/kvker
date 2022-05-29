---
layout: note
title: echarts绘制的电梯图
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```html
<div class="box">
  <div id="bar_line_chart" class="bar-chart"></div>
</div>
```

```less
.box {
  height: 320px;
  .bar-chart {
    width: 100%;
    height: 100%;
  }
}
```

```js
!(function () {
  let has_motion = false, // 是否做了动画
    bar_motion_duration = 5000, // 动画时长
    no_motion = false, // 如果全部的show_motion是false，就不做动画了
    screen_data = Array.from({ length: 100 }).map((i) => {
      let floor_end = ~~(Math.random() * 24)
      let floor_count = ~~(Math.random() * 10 + 15)
      if (floor_end >= floor_count) {
        floor_end = floor_count - 1
      }
      // console.log(floor_end, floor_count)
      return {
        floor_start: 0, // 本次乘梯开始楼层
        floor_end, // 本次乘梯结束楼层
        floor_count, // 总楼层
        show_motion: !!(Math.random() > 0.3), // 是否展示动画
      }
    }),
    bar_interval = null,
    echarts_bar_instance = null

  renderRideBarChart()

  function renderRideBarChart() {
    let main_color = '#67A8FF'
    let orange_color = '#ff7800'
    let data_0 = screen_data.map((i) => i.floor_start)
    let data_1 = screen_data.map(() => 1) // 一层代表电梯
    let data_2 = screen_data.map((i) => i.floor_count - i.floor_start - 1)
    // 判断是否需要做动画，不需要的话，在update直接return节省计算资源
    no_motion = screen_data.every((i) => !i.show_motion)
    // console.log(no_motion)
    echarts_bar_instance = echarts.init(document.querySelector('#bar_line_chart'))
    let option = {
      animationDuration: 0,
      animationDurationUpdate: bar_motion_duration,
      xAxis: {
        type: 'category',
        data: Array.from({ length: screen_data.length }).map((i, index) => index + 1),
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
        left: 20,
        right: 20,
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
    echarts_bar_instance.setOption(option)
    if (!bar_interval) {
      echarts_bar_instance.on('finished', () => {
        if (!bar_interval) {
          updateRideBarChart()
          bar_interval = setInterval(() => {
            updateRideBarChart()
          }, bar_motion_duration)
        }
      })
    }
    echarts_bar_instance.setOption(option)
  }
  
  function updateRideBarChart() {
    // 无动画则跳出
    if (no_motion) return
    let data_0 = screen_data.map((i) => {
      if (i.show_motion) return has_motion ? i.floor_start : i.floor_end
      else return i.floor_start
    })

    let data_1 = screen_data.map(() => 1) // 一层代表电梯
    let data_2 = screen_data.map((i) => {
      if (i.show_motion) return has_motion ? i.floor_count - i.floor_start - 1 : i.floor_count - i.floor_end - 1
      else return i.floor_count - i.floor_start - 1
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
    // 已做过动画则直接返回，不需要动画返回。如果需要来回的动画，删除下面的ifelse就行
    // if (has_motion) {
    //   option.animation = false
    //   option.animationDurationUpdate = 0
    //   setTimeout(() => {
    //     updateRideBarChart()
    //   }, 0)
    // } else {
    //   option.animation = true
    //   option.animationDurationUpdate = bar_motion_duration
    // }

    echarts_bar_instance.setOption(option)
    has_motion = !has_motion
  }
})()
```
  