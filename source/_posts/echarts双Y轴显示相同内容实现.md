---
layout: note
title: echarts双Y轴显示相同内容实现
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---


```js
renderCountChart() {
  // 基于准备好的dom，初始化echarts实例
  count_line_chart = echarts.init(this.$refs.count_line_chart)
  let pop_width = 232
  let container_height = 360

  let total_number_list = []
  this.count_chart_data.forEach(i => i.value.forEach(it => total_number_list.push(it)))
  let max = Math.max(...total_number_list)

  let y_axis = {
    type: 'value',
    splitLine: {    //网格线
      lineStyle: {
        type: 'dashed'    //设置网格线类型 dotted：虚线   solid:实线
      },
      show: true //隐藏或显示
    },
    axisLine: {       //y轴
      show: false
    },
    axisTick: {       //y轴刻度线
      show: false
    },
    axisLabel: {
      show: true,
      textStyle: {
        color: '#666'
      }
    },
    min: 0,
    max: Math.ceil(max / 500) * 500,
  }

  // 指定图表的配置项和数据
  let option = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      left: 140,
      itemGap: 10,
      itemHeight: 8,
      data: this.count_chart_name_list,
    },
    grid: {
      left: '0%',
      right: '3%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'],
      axisTick: {
        inside: true,
      },
    },
    yAxis: [
      y_axis,
      y_axis,
    ],
    // data需要组装处理
    series: [
      {
        name: '在线人数',
        symbol: 'none',
        color: '#92D649',
        type: 'line',
        smooth: true,
        yAxisIndex: 1,
        data: this.count_chart_value_list[0],
      },
      {
        name: '点赞数',
        type: 'line',
        symbol: 'none',
        color: '#FF8C58',
        smooth: true,
        data: this.count_chart_value_list[1],
      },
      {
        name: '音浪收入',
        type: 'line',
        symbol: 'none',
        color: '#9B7FFF',
        smooth: true,
        data: this.count_chart_value_list[2],
      },
      {
        name: '新增粉丝数',
        type: 'line',
        symbol: 'none',
        color: '#FFD05E',
        smooth: true,
        data: this.count_chart_value_list[3],
      },
      {
        name: '新增粉丝团数',
        type: 'line',
        symbol: 'none',
        color: '#0091FF',
        smooth: true,
        data: this.count_chart_value_list[4],
      }
    ]
  }

  // 使用刚指定的配置项和数据显示图表。
  count_line_chart.setOption(option)
},
```
