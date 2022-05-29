---
layout: note
title: CSS匹配选择器
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
// 匹配开头
document.querySelector('[attr^=abc]') // 如值为abcdef则匹配上

// 匹配结尾
document.querySelector('[attr$=abc]') // 如值为defabc则匹配上

// 匹配含有
document.querySelector('[attr*=abc]') // 如值为abcdef则匹配上

// 匹配含有完整
document.querySelector('[attr~=abc]') // 如值为abcdef则匹配不上，必须匹配abc
```

上面的attr可以为任意HTML标签挂着的值，如href, class等均可
  