---
layout: note
title: vue通过bus模式传值
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```html
<div id="app">
    <child1></child1>
    <child2></child2>
</div>
```

```js
<script src="vue.js"></script>
<script>
    let bus = new Vue() // 一个空的中间件转发事件
    let vm = new Vue({
        el: '#app',
        components: {
            child1: {
                template: `<div>{{value1}}</div>`,
                mounted: function() {
                    bus.$on('add', this.add)
                },
                data: () => {
                    return {
                        value1: 0
                    }
                },
                methods: {
                    add: function() {
                        this.value1++
                    }
                }
            },
            child2: {
                template: `<input type='button' @click='add' value='add' />`,
                data: () => {
                    return {
                        value2: 0
                    }
                },
                methods: {
                    add: function() {
                        bus.$emit('add')
                    }
                }
            }
        }
    })
</script>
```
  