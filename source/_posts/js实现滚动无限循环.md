---
layout: note
title: js实现滚动无限循环
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```html
<template>
  <div ref="timeline" class="timeline">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeline: null,
    }
  },
  mounted() {
    this.timeline = this.$refs.timeline
    this.scroll()
  },
  methods: {
    scroll() {
      let timeline = this.timeline
      if(timeline.scrollTop >= timeline.scrollHeight / 2) {
        timeline.scrollTop = 0
      } else {
        timeline.scrollTop += 1
      }
      requestAnimationFrame(this.scroll)
    },
  }
}
</script>

<style lang="less" scoped>
</style>
```

```css
.timeline::-webkit-scrollbar {
    display: none
  }

  .timeline {
    width     : 260px;
    height    : calc(100% - 20px);
    overflow-y: scroll;
    font-size : 12px;
}
```
  