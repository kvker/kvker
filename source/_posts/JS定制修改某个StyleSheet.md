---
layout: note
title: JS定制修改某个StyleSheet
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
let ss = document.styleSheets[0]
ss.insertRule(`.mouse {transition: transform ${1 - game_config.level / 10}s linear;}`, ss.cssRules.length)
```

上面是覆盖样式的实例
  