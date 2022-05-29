---
layout: note
title: elementUI弹出确认框模板
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
this.$confirm('此操作将永久删除该班次，请确认?', '提示', {
  confirmButtonText: '确定',
  cancelButtonText: '取消',
  type: 'warning'
}).then(async () => {
  this.$message({
    type: 'success',
    message: '删除成功!'
  })
  await this.$api.deleteShiftClass(item.objectId)
  this.getList()
}).catch(() => {
  this.$message({
    type: 'info',
    message: '已取消删除'
  })
})
```
  