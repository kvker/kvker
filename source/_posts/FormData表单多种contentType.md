---
layout: note
title: FormData表单多种contentType
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

构建指定类型文件即可

```js
form_data.append('json_key', new Blob([JSON.stringify({a: 1, b: 2})], {type: 'application/json'}))
```
  