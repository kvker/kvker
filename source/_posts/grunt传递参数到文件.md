---
layout: note
title: grunt传递参数到文件
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

通过 grunt-replace 插件实现。

```html
@@foo
```

通过下面替换成 `bar`

```js
module.exports = function (grunt) {
  grunt.initConfig({
    replace: {
      dist: {
        options: {
          patterns: [
            {
              match: 'foo',
              replacement: 'bar'
            }
          ]
        },
        files: [
          {
            expand: true, flatten: true, src: ['src/index.html'], dest: 'build/'
          }
        ]
      }
    }
  });
  grunt.loadNpmTasks('grunt-replace');
  grunt.registerTask('default', ['replace']);
}
```
  