---
layout: note
title: nuxt.config.js标注
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

build：主要对应 Webpack 中的各配置项，可以对默认的 Webpack 配置进行扩展，如这里代码

cache：主要对应内置的组件缓存模块lru-cache的配置对象，有默认值，可选关闭

css：对应我们在SPA随处引用样式文件的require语句

dev：用于自定义配置环境变量，对应之前webpack.config.js相关文件中的变量语句

env：同上息息相关

generate：对generate命令执行时的行为做一些定制

head：对应vue-meta插件的全局配置，vue-meta用于VUE/SSR程序的文档元信息的管理

loading：用于定制化Nuxt.js内置的进度条组件

performance：用于配置Node.js服务器性能上的配置

plugins：用于管理和应用对应plugins文件夹中的插件

rootdir：用于设置 Nuxt.js 应用的根目录（这俩api有很大合并的意义）

srcdir：用于设置 Nuxt.js 应用的源码目录（这俩api有很大合并的意义）

router：用于对vue-router的扩展和定制，其中还包括了中间件的配置，但并不完美（后面说）

transition：用于定制Nuxt.js内置的页面切换过渡效果的默认属性值

watchers：用于定制Nuxt.js内置的文件监听模块chokidar和 Webpack 的相关配置项
  