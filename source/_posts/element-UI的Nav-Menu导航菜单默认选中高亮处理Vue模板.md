---
layout: note
title: element-UI的Nav-Menu导航菜单默认选中高亮处理Vue模板
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```html
<template>
  <div class="root-container">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <template v-for="(item, idx) of path_list">
        <el-submenu :index="item.key" v-if="item.children" :key="idx">
          <template slot="title">{{item.label}}</template>
          <el-menu-item
            v-for="(inner_item, inner_idx) of item.children"
            :key="inner_idx"
            :index="inner_item.key"
          >{{inner_item.label}}</el-menu-item>
        </el-submenu>
        <el-menu-item v-else :index="item.key" :key="idx">{{item.label}}</el-menu-item>
      </template>
      <el-submenu index="99">
        <template slot="title">账号</template>
        <el-menu-item index="99-1">修改密码</el-menu-item>
        <el-menu-item index="99-2">退出</el-menu-item>
      </el-submenu>
    </el-menu>
    <nuxt class="page" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '',
      path_list: [
        {
          key: '1',
          label: '首页',
          path: '/',
        },
        {
          key: '2',
          label: '权限管理',
          path: '/access',
        },
        {
          key: '3',
          label: '请假审批',
          path: '/leave',
        },
        {
          key: '4',
          label: '排班',
          path: '/shift',
        },
        {
          key: '5',
          label: '考勤',
          path: '/check',
        },
        {
          key: '6',
          label: '报销',
          path: '/reimbursement',
        },
        {
          key: '7',
          label: '志愿者',
          path: '/volunteer',
        },
        {
          key: '8',
          label: '活动/报班管理',
          children: [
            {
              key: '8-1',
              path: '/activity',
              label: '活动列表',
            },
            {
              key: '8-2',
              path: '/activity/publish',
              label: '活动发布',
            },
            {
              key: '8-3',
              path: '/activity/shift_publish',
              label: '排班发布',
            },
          ]
        },
        {
          key: '9',
          label: '企业文章',
          children: [
            {
              key: '9-1',
              path: '/notice',
              label: '列表',
            },
            {
              key: '9-2',
              path: '/notice/category',
              label: '分类',
            },
            {
              key: '9-3',
              path: '/notice/publish',
              label: '发布',
            },
          ]
        },
        {
          key: '10',
          label: '系统设置',
          children: [
            {
              key: '10-1',
              path: '/system',
              label: '日志',
            },
            {
              key: '10-2',
              path: '/system/notification',
              label: '通知',
            },
          ]
        },
      ]
    }
  },
  created() {
    if(!this.$avUser.current()) {
      this.$router.replace('/account')
    }
  },
  mounted() {
    this.handleActiveIndex()
  },
  methods: {
    /**
     * 处理默认高亮
     */
    handleActiveIndex() {
      let path = this.$route.path
      if(path === '/') {
        this.activeIndex = '1'
        return
      }
      for(const item of this.path_list) {
        if(item.path === '/') continue
        if(!path.indexOf(item.path)) {
          this.activeIndex = item.key
          break
        } else if(item.children) {
          this.activeIndex = (item.children.find(i => path.includes(i.path)) || {}).key
          if(this.activeIndex) break
        }
      }
    },
    /**
     * 处理点选
     */
    handleSelect(key, keyPath) {
      let path
      for(const item of this.path_list) {
        if(item.key === key) {
          path = item.path
          break
        } else if(item.children) {
          path = (item.children.find(i => i.key === key) || {}).path
          if(path) break
        }
      }
      // 特殊路径处理
      if(!path) {
        switch(key) {
          case '99-1':
            // path = '/account/change_password'
            alert('暂无处理')
            return
            break
          default:
            this.$AV.User.logOut()
            path = '/account'
        }
      }
      this.$router.push(path)
    }
  },
}
</script>


<style>
body {
  margin: 0;
}
.page {
  width: 100%;
  height: calc(100vh - 90px);
  margin-top: 16px;
}
</style>
```
  