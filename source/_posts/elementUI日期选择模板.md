---
layout: note
title: elementUI日期选择模板
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```html
<el-date-picker
  v-model="date_range"
  type="daterange"
  range-separator="至"
  start-placeholder="开始日期"
  end-placeholder="结束日期"
></el-date-picker>
```

```js
data() {
  return {
    date_range: [],
  }
}
```
  