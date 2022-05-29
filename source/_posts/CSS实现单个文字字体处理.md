---
layout: note
title: CSS实现单个文字字体处理
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

`&`这个字符

```css
@font-face {
  font-falimy: Ampersand;
  src: local('Baskerville'), url('xxx/xxx.woff');
  unicode-range: U+26;
}

div {
  font-family: Ampersand, Helvetica, sans-serif;
}
```

`unicode-range: U+26;`这句是查询`&`这个字符的unicode编码来的，`'&'.charCodeAt(0).toString(16)`返回26.
  