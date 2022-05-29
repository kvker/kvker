---
layout: note
title: nodemon忽略文件配置
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

package.json

```json
{
  "nodemonConfig": {
    "ignore": ["server/static/*"],
    "delay": "0"
  }
}
```

完整配置: nodemon.json

```json
{
  "restartable": "rs",
  "ignore": [
    ".git",
    "node_modules/**/node_modules"
  ],
  "verbose": true,
  "execMap": {
    "js": "node --harmony"
  },
  "events": {
    "restart": "osascript -e 'display notification \"App restarted due to:\n'$FILENAME'\" with title \"nodemon\"'"
  },
  "watch": [
    "test/fixtures/",
    "test/samples/"
  ],
  "env": {
    "NODE_ENV": "development"
  },
  "ext": "js,json"
}
```
  