---
layout: note
title: vue动画实例
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```html
<transition :name="transitionName">
  <router-view></router-view>
</transition>
```

```css
.push-enter {
  transform: translateX(100%);
}
.push-enter-active {
  transition: transform 0.3s ease;
}
.push-enter-to,
.push-leave {
  transform: translateX(0);
  opacity: 1;
}
.push-leave-to {
  transform: translateX(-100%);
  opacity: 0.8;
}
.push-leave-active {
  transition: transform 0.3s ease;
}
.pop-enter {
  transform: translateX(-100%);
}
.pop-enter-active {
  transition: transform 0.3s ease;
}
.pop-enter-to,
.pop-leave {
  transform: translateX(0);
  opacity: 1;
}
.pop-leave-to {
  transform: translateX(100%);
  opacity: 0.8;
}

.pop-leave-active {
  transition: transform 0.3s ease;
}
```

```js
watch: {
'$route'(to, from) {
  const toDepth = to.path.split('/').length
  const fromDepth = from.path.split('/').length
  if(to.path === '/') this.transitionName = 'pop'
  else if(from.path === '/') this.transitionName = 'push'
  else this.transitionName = toDepth > fromDepth ? 'push' : 'pop'
}
}
```
  