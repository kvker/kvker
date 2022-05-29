---
layout: note
title: el-table模板
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```html
<el-table ref="multipleTable" :data="shift_item_list" tooltip-effect="dark" style="width: 100%">
  <el-table-column type="index" width="50"></el-table-column>
  <el-table-column label="班次" prop="shift.name"></el-table-column>
  <el-table-column label="岗位数" prop="shift.user_amount"></el-table-column>
  <el-table-column label="操作">
    <template slot-scope="scope">
      <el-button @click="detail(scope.row, scope.$index)">详情</el-button>
    </template>
  </el-table-column>
</el-table>
```
  