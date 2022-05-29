---
layout: note
title: echarts柱状图顶部
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
let data = [{
        value: 1800,
        label: '第1名',
      },{
        value: 1800,
        label: '第1名',
      },{
        value: 1800,
        label: '第1名',
      },{
        value: 300,
        label: '第5名',
      },{
        value: 500,
        label: '第3名',
      },{
        value: 400,
        label: '第4名',
      },{
        value: 300,
        label: '第3名',
      }]

series: [
{
            name: '排名',
            type: 'bar',
            barWidth: '30%',
            data: data.map(i => i.value),
            itemStyle: {
              normal: {
                label: {
                  formatter: p => {
                    return data[p.dataIndex].label
                  },
                  show: true,
                  position: "top",
                  textStyle: {
                    fontWeight: "bolder",
                    fontSize: "12",
                    color: "#fff"
                  }
                },
              }
            }
          },
]
```
  