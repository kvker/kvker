---
layout: note
title: vue自定义组件v-model
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
Vue.component('my-checkbox', {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean,
    // 这样就允许拿 `value` 这个 prop 做其它事了
    value: String
  },
  // ...
})
```

```html
<my-checkbox v-model="foo" value="some value"></my-checkbox>
```

上述代码等价于：
```html
<my-checkbox
  :checked="foo"
  @change="val => { foo = val }"
  value="some value">
</my-checkbox>
```
  