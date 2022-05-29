---
layout: note
title: vue基本语法
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

初始化与触发
```js
const store = new Vuex.Store({
    state: {
      count: 0
    },
    mutations: {
      // 接受 state 为参数
      increment (state) {
        state.count++
      }
    }
  })

  store.commit('increment')
  console.log(store.state.count) // -> 1
```


基本使用, 基于 computed
```js
// new Vue 时候添加一个属性 store
  new Vue({
      //..
      store,
      //..
  })

  // 子组件 computed
  computed: {
      a() {
          return this.$store.state.xxx
      }
  }
```

computed 简写
```js
 import { mapState } from 'vuex'

  export default {
      // ...
      computed: mapState({
      counter: 'count' // 等同于下面箭头函数
      // counter: state => state.count
      // counter(state) { // 要到 this
      // return state.count + this.content
      // }
    })
  }

  // 如果同名, 使用数组
  computed: mapState([
      'count'
  ])
```

getters 类似 vue 的 computed, 不过只在调用的时候触发函数, 需要注意
```js
  getters: {
      // 两个参数
      getterCount: (state, getters) => {
        return state.count + 1
      }
  }

  // 调用
  this.$store.getters.getterCount
```

mapGetters 与 mapState 一样功能
```js
import {mapGetters} from 'vuex'

  export default {
    data() {
      return (
        {
          content: 'hello vue'
        }
      )
    },
    computed: mapGetters({
      count: 'getterCount'
    })
  }
```

mutations 只能同步处理
```js
`
// 申明
  mutations: {
      // 第一个参数为 state, 第二个建议使用对象
      increment (state, payload) {
          state.count += payload.xxx
      }
  }

  // 调用
  store.commit('increment', {})
  this.$store.commit('increment', {})

  // 对象方式调用, 整个对象都是 payload
  store.commit({
    type: 'increment',
    number: 10
  })
```

mapMutations 与 mapState 一样用法, 映射 mutaions 到 methods
  ```js
import {mapMutations} from 'vuex'

  // store
  mutations: {
      increment(state, payload) {
          state.count += payload.number
      }
  }

  // component
  methods: Vuex.mapMutations({
      increment: 'increment'
  })

  // 使用
  this.increment({number: 10})
actions 异步处理, 与 mutations 组合使用

  // store
  actions: {
      // context 是一个与 store 实例相同方法和属性的对象, 不是 store
      // increment(context) {
      increment({commit}, payload) {
        setTimeout(() => {
          commit('increment', payload)
        }, 1000)
      }
   }

  // component 使用了 mapActions, 与 mapMutations 一样
  // store.displatch('increment')

  methods: Vuex.mapActions({
      increment: 'increment'
  }),
  mounted: function() {
      this.increment({number: 10})
      console.log(store.state.count)
  }
```

modules 多模块 store
```js
 //store
  modules: {
      a: xxx,
      b: xxx,
      ...
  }

  // 调用类似
  store.state.a
```


表单处理, input
```html
<input v-model="message">
// ...
computed: {
  message: {
      get () {
        return this.$store.state.obj.message
      },
      set (value) {
        this.$store.commit('updateMessage', value)
      }
    }
  }
```
  