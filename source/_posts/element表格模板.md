---
layout: note
title: element表格模板
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```html
<template>
  <div class="notification">
    <el-table ref="multipleTable" :data="list" tooltip-effect="dark" style="width: 100%">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column prop="title" label="消息标题"></el-table-column>
      <el-table-column prop="user.name" label="发起人"></el-table-column>
      <el-table-column label="消息时间">
        <template slot-scope="scope">{{$util.formatDate(scope.row.createdAt)}}</template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="text" @click="handle(scope.row, scope.$index)">前往处理</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="totalCount"
      :current-page.sync="currentPage"
      @current-change="getList"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      totalCount: 1,
      currentPage: 1,
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    async getList(page = 1) {
      let res = await this.$api.getNotification({ page })
      this.list = res
    },
    handle(item, idx) {
      console.log({ item, idx })
    }
  }
}
</script>

<style lang="less" scoped>
</style>
```
  