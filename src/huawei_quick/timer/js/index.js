"use strict"

const TIMER_HISTORY = 'timer_history'

let timer = document.querySelector('h1')
let total_day = document.querySelector('.total.day span')
let total_week = document.querySelector('.total.week span')
let total_month = document.querySelector('.total.month span')
let total_year = document.querySelector('.total.year span')
let total_full = document.querySelector('.total.full span')
let status_button = document.querySelector('#status_button')

// 配置
// 计时步长, 暂停时候用到
let step = 1

// 计时器
let interval
// 本次总计时间
let total_time
// 开始与结束时间, 用来记录进入history
let start_time
let end_time

// timer.innerText = '00:00:00'

let history = JSON.parse(localStorage.getItem(TIMER_HISTORY))
// console.log({ history })
if(!history) {
  history = []
  total_day.innerText = '00:00:00'
  total_week.innerText = '00:00:00'
  total_month.innerText = '00:00:00'
  total_year.innerText = '00:00:00'
  total_full.innerText = '00:00:00'
} else {
  // 计算统计
  calcTimer()
}

function clickStart() {
  if(interval) return

  let add_time = prompt('请输入补充时间, 单位:秒', 0)
  if(add_time === null) return

  if(!add_time.match(/^\d+$/)) {
    alert('请输入纯数字')
  } else {
    start_time = dayjs().unix()
    total_time = Number(add_time)
    timer.innerText = formatTime(total_time)
    interval = setInterval(() => {
      total_time += step
      timer.innerText = formatTime(total_time)
    }, 1000)
  }
}

function clickEnd() {
  if(!interval) {
    alert('未开始')
    return
  }

  let add_time = prompt('请输入补充时间, 单位:秒', 0)
  if(add_time === null) return

  if(!add_time.match(/^\d+$/)) {
    alert('请输入纯数字')
  } else {
    let sub_time = prompt('请输入减去时间, 单位:秒', 0)
    if(sub_time === null) return

    if(!sub_time.match(/^\d+$/)) {
      alert('请输入纯数字')
    } else {
      end_time = dayjs().unix()
      total_time += (Number(add_time) - Number(sub_time))
      clearInterval(interval)
      let item = {
        start_time,
        end_time,
        total_time
      }
      history.push(item)
      localStorage.setItem(TIMER_HISTORY, JSON.stringify(history))
      location.reload()
    }
  }
}

function clickReset() {
  if(confirm('危险操作, 将删除所有记录, 不可恢复, 请确认?')) {
    if(confirm('再次提示, 操作不可恢复, 请确认?')) {
      localStorage.removeItem(TIMER_HISTORY)
      location.reload()
    }
  }
}

function clickStatusButton() {
  if(!interval) {
    alert('未开始')
    return
  }
  if(status_button.innerText === '暂停') {
    step = 0
    status_button.innerText = '继续'
  } else {
    step = 1
    status_button.innerText = '暂停'
  }
}

function clickRadio(e) {
  calcTimer(+e.target.value)
}

function calcTimer(type) {
  // 计算时间的起始时间标记
  let d = dayjs()
  let start_day = d.startOf('day').unix()
  // 周一起算
  let start_week
  if(d.day()) {
    start_week = d.startOf('week').add(1, 'day').unix()
  } else {
    // 星期天特殊处理
    start_week = d.subtract(6, 'day').startOf('day').unix()
  }
  let start_month = d.startOf('month').unix()
  let start_year = d.startOf('year').unix()

  let history_day = history.filter(i => i.start_time > start_day)
  let history_week = history.filter(i => i.start_time > start_week)
  let history_month = history.filter(i => i.start_time > start_month)
  let history_year = history.filter(i => i.start_time > start_year)

  // 向上取整
  if(type === 1) {
    total_day.innerText = `${history_day.reduce((p, c) => p += Math.ceil(c.total_time / 3600), 0)}小时`
    total_week.innerText = `${history_week.reduce((p, c) => p += Math.ceil(c.total_time / 3600), 0)}小时`
    total_month.innerText = `${history_month.reduce((p, c) => p += Math.ceil(c.total_time / 3600), 0)}小时`
    total_year.innerText = `${history_year.reduce((p, c) => p += Math.ceil(c.total_time / 3600), 0)}小时`
    total_full.innerText = `${history.reduce((p, c) => p += Math.ceil(c.total_time / 3600), 0)}小时`
  } else if(type === 2) {
    // 向下取整
    total_day.innerText = `${history_day.reduce((p, c) => p += ~~(c.total_time / 3600), 0)}小时`
    total_week.innerText = `${history_week.reduce((p, c) => p += ~~(c.total_time / 3600), 0)}小时`
    total_month.innerText = `${history_month.reduce((p, c) => p += ~~(c.total_time / 3600), 0)}小时`
    total_year.innerText = `${history_year.reduce((p, c) => p += ~~(c.total_time / 3600), 0)}小时`
    total_full.innerText = `${history.reduce((p, c) => p += ~~(c.total_time / 3600), 0)}小时`
  } else {
    total_day.innerText = formatTime(history_day.reduce((p, c) => p += c.total_time, 0))
    total_week.innerText = formatTime(history_week.reduce((p, c) => p += c.total_time, 0))
    total_month.innerText = formatTime(history_month.reduce((p, c) => p += c.total_time, 0))
    total_year.innerText = formatTime(history_year.reduce((p, c) => p += c.total_time, 0))
    total_full.innerText = formatTime(history.reduce((p, c) => p += c.total_time, 0))
  }
}