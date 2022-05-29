---
layout: note
title: 导出JSON为excel的xls或csv
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
import Json2excel from "custom-json2excel"

function exportList() {
  // 文档 https://www.npmjs.com/package/custom-json2excel
  const keyMap = {
    name: "员工名字",
    date: "签到日期",
    schedual_working_time: "所处班次上班时间",
    working_time: "员工签到时间",
    schedual_work_off_time: "所处班次下班时间",
    work_off_time: "员工签退时间",
    after_minute: "迟到几分钟",
    before_minute: "早退几分钟",
  }
  const filters = [] // ["sex"]
  const json2excel = new Json2excel({
    data: this.listShow,
    keyMap,
    filters
  })
  console.log(json2excel.generate())
},
```
  