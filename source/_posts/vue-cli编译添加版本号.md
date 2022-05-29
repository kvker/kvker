---
layout: note
title: vue-cli编译添加版本号
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
//定义版本  这是使用当前时间数  当然也可以自定义版本1.0等
const Version  = new Date().getTime();
module.exports = {
    // webpack配置
    chainWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 给js和css配置版本号
            config.output.filename('js/[name].[chunkhash].' + Version + '.js').end();
            config.output.chunkFilename('js/[name].[chunkhash].' + Version + '.js').end();
            config.plugin('extract-css').tap(args => [{
                filename: `css/[name].[chunkhash].${Version}.css`,
                chunkFilename: `css/[name].[chunkhash].${Version}.css`
            }])
        }
    }
}
```
  