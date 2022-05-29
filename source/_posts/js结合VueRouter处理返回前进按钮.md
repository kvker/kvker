---
layout: note
title: js结合VueRouter处理返回前进按钮
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
history.pushState(null, null, document.URL)

window.onpopstate = () => {
  const path_name = localStorage.getItem('back_path_name')
  if(path_name === '0') {
    // console.log({ path_name })
    this.$router.push({ path: '/', replace: true })
  }
}
```

纯VueRouter处理

```js
beforeRouteLeave(to, from, next) {
    if (this.editor.txt.html().trim() && !this.is_submit) {
      if (confirm('提示：您尚有未保存的内容，离开本页将丢失编辑内容！')) {
        next()
      }
    } else {
      next()
    }
  },
```
  