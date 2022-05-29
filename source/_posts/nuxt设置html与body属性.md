---
layout: note
title: nuxt设置html与body属性
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

官方文档没有找到在哪里设置，但是在[Views章节](https://nuxtjs.org/guide/views/#document)有提到相关，内容如下：

```html
<!DOCTYPE html>
<html {{ HTML_ATTRS }}>
  <head>
    {{ HEAD }}
  </head>
  <body {{ BODY_ATTRS }}>
    {{ APP }}
  </body>
</html>
```

结合Google到在nuxt的[issues上相关提问](https://github.com/nuxt/nuxt.js/issues/388)，推导出相关的信息如下：

1. html配置 => htmlAttrs
2. body配置 => bodyAttrs

__以上均配置在nuxt.config.js的head下。__

经过测验后，结果明了，不用再郁闷如html的lang配置以及body的默认样式处理了。

**未添加**

```html
<!DOCTYPE html>
<html data-n-head>
  <body data-n-head>
  </body>
</html>
```
**添加后**

```js
module.exports = {
  head: {
    head: {
      htmlAttrs: {
        lang: 'zh-cmn-Hans',
      },
      bodyAttrs: {
        class: 'body-class',
      },
    },
  }
}
```

```html
<!DOCTYPE html>
<html lang="zh-cmn-Hans" data-n-head="lang">
  <body class="body-class" data-n-head="class">
  </body>
</html>

  