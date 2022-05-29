---
layout: note
title: 小程序日历插件-极点日历demo
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```html
<view class="calendar-box">
  <calendar weeks-type="cn" header-style="calendar-header" board-style="calendar-board" show-more-days="{{true}}" binddayClick='dayClick' days-color="{{days_color}}" bindnextMonth="changeCalendar" bindprevMonth="changeCalendar" binddateChange="changeCalendar"></calendar>
  <include src="/include/remind_box.wxml"></include>
</view>
```

```css
.calendar-box {
  padding: 20rpx 0;
  border-radius: 10rpx;
  background: #f8f8f8;
}

.calendar-header {
  color: var(--main_color);
}

.calendar-board {
    color: #c7cbe2;
    font-weight: bold;
}
```

```js
const app = getApp()
const ranges = [{
    time: '9:00~13:00 早班',
    selected: false,
  },
  {
    time: '13:00~17:00 中班',
    selected: false,
  },
  {
    time: '17:00~20:00 晚班',
    selected: false,
  },
  {
    time: '9:00~20:00 全天班',
    selected: false,
  }
]

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 标记过的日期，按年月分类
    marked_days: [],
    // 日历高亮
    days_color: [],
    current_year_month: '',
    form: {},
    ranges: [],
    mr_show: false,
    selected_range_time: '', // 选中编辑的日期区间
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  dayClick(e) {
    let calendar = e.detail
    let time = app.dayjs(`${calendar.year}-${calendar.month}-${calendar.day}`).format('YYYY-MM-DD')
    let marked_day
    this.data.marked_days.forEach((i, index) => {
      if (i.time === time) {
        marked_day = i
      }
    })
    if (!marked_day) {
      marked_day = {
        time,
        ranges,
      }
    }
    this.setData({
      mr_show: true,
      ranges: marked_day.ranges,
      selected_range_time: time,
    })
  },

  changeCalendar(e) {
    let {
      currentMonth,
      currentYear,
    } = e.detail
    let current_year_month = app.dayjs(`${currentYear}${currentMonth}`).format('YYYY-MM')
    this.setData({
      current_year_month,
    })
    this.handleHighLight()
  },

  mrConfirm(e) {
    let {
      item,
    } = e.detail
    let selected_range_time = this.data.selected_range_time
    let marked_days = this.data.marked_days
    let idx = -1
    marked_days.forEach((i, index) => {
      if (i.time === selected_range_time) {
        idx = index
      }
    })
    // 如果ranges有被勾选的
    if (item.some(i => i.selected)) {
      // 如果没找到
      if (idx === -1) {
        idx = marked_days.length
      }
      let marked_day = {
        time: selected_range_time,
        ranges: item,
        // 下面是标记
        month: 'current',
        day: app.dayjs(selected_range_time).date(),
        color: '#fff',
        background: '#9cdbd9',
      }
      this.setData({
        mr_show: false,
        [`marked_days[${idx}]`]: marked_day,
      })
    } else {
      // 匹配到才删除
      if (idx > -1) {
        this.data.marked_days.splice(idx, 1)
      }
      this.setData({
        mr_show: false,
        marked_days: this.data.marked_days,
      })
    }
    this.handleHighLight()
  },

  mrCancel() {
    this.setData({
      mr_show: false,
    })
  },

  handleHighLight() {
    let {
      current_year_month,
      marked_days
    } = this.data
    let days_color = marked_days.filter(i => i.time.includes(current_year_month))
    this.setData({
      days_color,
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
```
