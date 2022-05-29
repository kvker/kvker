---
layout: note
title: git钩子模板
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

本地钩子在.git/hooks/xxx.sample，具体名字区分用处，真正被调用的钩子是删除后面的.sample的

这里距离nodejs钩子

```js
#!/usr/bin/env node

const exec = require('child_process').execSync
const fs = require('fs')
const path = require('path')

let current_branch = exec('git name-rev --name-only HEAD', { encoding: 'utf8' })

// console.log(current_branch)
let file_path
if (current_branch === 'master') {
  // 上线
  file_path = path.resolve('dockerfile_pro')
} else {
  // 上线前，一般是uat
  file_path = path.resolve('dockerfile_pre')
}

let content = fs.readFileSync(file_path, { encoding: 'utf8' })

// console.log(content)

fs.writeFileSync(path.resolve('dockerfile'), content)
console.log(111)
exec('exit 0')
```
  