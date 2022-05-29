---
layout: note
title: vue自定义指令
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

语法

```js
// 注册一个全局自定义指令 v-focus
Vue.directive('focus', {
  // 当绑定元素插入到 DOM 中。
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})

// 局部指令
directives: {
  focus: {
    // 指令的定义---
  }
}

// 只关注 bind 和 update 简写方式
Vue.directive('color-swatch', function (el, binding) {
  el.style.backgroundColor = binding.value
}
```

钩子

bind：只调用一次，指令第一次绑定到元素时调用，用这个钩子函数可以定义一个在绑定时执行一次的初始化动作。
inserted：被绑定元素插入父节点时调用 (父节点存在即可调用，不必存在于 document 中)。
update：所在组件的 VNode 更新时调用，但是可能发生在其孩子的 VNode 更新之前。指令的值可能发生了改变也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)。
componentUpdated：所在组件的 VNode 及其孩子的 VNode 全部更新时调用。
unbind：只调用一次，指令与元素解绑时调用。

钩子参数

el：指令所绑定的元素，可以用来直接操作 DOM 。
binding：一个对象，包含以下属性：
name：指令名，不包括 v- 前缀。
value：指令的绑定值，例如：v-my-directive=”1 + 1”, value 的值是 2。
oldValue：指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。
expression：绑定值的字符串形式。例如 v-my-directive=”1 + 1” ，expression 的值是 “1 + 1”。
arg：传给指令的参数。例如 v-my-directive:foo，arg 的值是 “foo”。
modifiers：一个包含修饰符的对象。例如：v-my-directive.foo.bar, 修饰符对象 modifiers 的值是 { foo: true, bar: true }。
vnode：Vue 编译生成的虚拟节点，查阅 VNode API 了解更多详情。
oldVnode：上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。


  