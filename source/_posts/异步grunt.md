---
layout: note
title: 异步grunt
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
  grunt.registerTask('ejsasync', function () {
    let done = this.async()
    LCData().then(() => {
      grunt.task.run('ejs')
      done()
    })
  })
  grunt.registerTask('async', ['ejsasync'])
```
  