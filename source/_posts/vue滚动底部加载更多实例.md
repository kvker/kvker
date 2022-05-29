---
layout: note
title: vue滚动底部加载更多实例
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

提供滚动
```
@scroll="updateAppScrollTop({scrollTop: $event.target.scrollTop})"
```

共有的 store
```js
appScrollTop: 0, // app 滚动监听数据
updateAppScrollTop(state, payload) {
  state.appScrollTop = payload.scrollTop
}
监听变化与加载

watch: {
    appScrollTop(value) {
      // console.log(value)
      // console.log(window.innerHeight)
      // console.log(this.$refs.list.offsetHeight)
      if (value !== 0) {
        if (value + window.innerHeight >= this.$refs.list.offsetHeight + 90) { // 70 是上方高度, 20 是 padding-bottom
          this.loadMore();
        }
      }
    }
},

// 加载更多
loadMore() {
  if (this.isLoading || this.noMore) return;

  this.page++;
  this.isLoading = true;
  this.aList({ page: this.page })
    .then(res => {
      if (res.total_page === this.page) this.noMore = true;
      this.isLoading = false;
    })
    .catch(err => (this.isLoading = false));
}
```
  