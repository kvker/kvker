---
layout: note
title: el-dialog封装
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```html
<setting :visible.sync="mpSettingDialogShow"></setting>

<el-dialog
  width="90%"
  title="管理公众号"
  :visible.sync="visibleSelf"
  @close="$emit('update:visible', false)"
></el-dialog>
```

```js
props: ['visible'],
data() {
  return {
    visibleSelf: this.visible,
  }
},
watch: {
  visible(val) {
    this.visibleSelf = val
  }
},
```
  