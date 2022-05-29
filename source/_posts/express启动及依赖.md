---
layout: note
title: express启动及依赖
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

`express --view=ejs [project-name]`

```json
{
  "name": "kvker",
  "version": "0.9.0",
  "private": true,
  "scripts": {
    "dev": "cross-env NODE_ENV=development nodemon ./bin/www",
    "start": "node ./bin/www"
  },
  "dependencies": {
    "body-parser": "^1.19.0",
    "cookie-parser": "~1.4.4",
    "cross-env": "^7.0.0",
    "debug": "~2.6.9",
    "ejs": "~2.6.1",
    "express": "~4.16.1",
    "http-errors": "~1.6.3",
    "md5": "^2.2.1",
    "morgan": "~1.9.1"
  }
}
```
  