---
layout: note
title: css与js让滚动顺滑
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```css
x {
  scroll-behavior: smooth; 
}
```

```js
dom.scrollIntoView({
  behavior: 'smooth'
})

// 如果css已经设置则不用再定义，如下就行
dom.scrollIntoView()
```

PS: safari不支持上述属性和函数效果
  