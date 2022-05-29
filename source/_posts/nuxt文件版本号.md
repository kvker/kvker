---
layout: note
title: nuxt文件版本号
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
// nuxt.config.js
module.exports = {
    build: {
        filenames: {
          app: ({ isDev }) => isDev ? '[name].v1.js' : '[contenthash].v1.js',
          chunk: ({ isDev }) => isDev ? '[name].v1.js' : '[contenthash].v1.js',
          css: ({ isDev }) => isDev ? '[name].v1.css' : '[contenthash].v1.css',
          img: ({ isDev }) => isDev ? '[path][name].v1.[ext]' : 'img/[contenthash:7].v1.[ext]',
          font: ({ isDev }) => isDev ? '[path][name].v1.[ext]' : 'fonts/[contenthash:7].v1.[ext]',
          video: ({ isDev }) => isDev ? '[path][name].v1.[ext]' : 'videos/[contenthash:7].v1.[ext]'
      }
  }
}
```
  