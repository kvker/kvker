---
layout: note
title: echarts折线图渐变
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
series: [
          {
            name: '-',
            type: 'line',
            areaStyle: {},
            itemStyle: {
              normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0, color: '#51C4FF' // 0% 处的颜色
                }, {
                  offset: 1, color: '#3196FA' // 100% 处的颜色
                }]
                ), //背景渐变色
                lineStyle: {        // 系列级个性化折线样式
                  width: 3,
                  type: 'solid',
                  color: "#0180ff" //折线的颜色
                }
              },
            },//线条样式
            data: [16, 13, 11, 13, 9, 13, 12, 10, 11, 14, 12, 13]
          },
          {
            name: '--',
            type: 'line',
            areaStyle: {},
            itemStyle: {
              normal: {   //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0, color: '#2FC25B' // 0% 处的颜色
                }, {
                  offset: 1, color: '#2FC25B' // 100% 处的颜色
                }]
                ),  //背景渐变色
                lineStyle: {        // 系列级个性化折线样式
                  width: 3,
                  type: 'solid',
                  color: "#4fd6d2"
                }
              },
            },//线条样式
            data: [11, 12, 15, 11, 12, 10, 12, 13, 17, 12, 15, 12]
          },
        ]
```
  