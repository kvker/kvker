---
layout: note
title: vscode调试
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

双引号会自动补充命令列表

```json
{
  // 使用 IntelliSense 了解相关属性。
  // 悬停以查看现有属性的描述。
  // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "调试express",
      "skipFiles": [
        "<node_internals>/**"
      ],
      "runtimeExecutable": "nodemon",
      "env": {
        "PORT": "3099"
      },
      "program": "${workspaceFolder}/bin/www"
    },
    {
      "type": "node",
      "request": "launch",
      "name": "测试express",
      "skipFiles": [
        "<node_internals>/**"
      ],
      "runtimeExecutable": "anywhere",
      "env": {

      }
    }
  ]
}
```
  