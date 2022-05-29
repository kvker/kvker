---
layout: note
title: electron打包为exe直到msix流程
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

1. electron-packager

  这里考虑Mac直接打包windows的话, 需要wine环境支持, homebrew更新最新即可

2. electron-wix-msi

  打包后的exe文件组, 使用这个打包成msi, 这里注意需要安装[wixtool](https://wixtoolset.org/releases/), 安装完成后还要配置环境变量, 系统级配置path,增加一行 `C:\Program Files (x86)\WiX Toolset v3.11\bin`才能是electron-wix-msi生效, 记得重新打开命令行, 之后按照流程走即可, 脚本换成如下, 避免node环境不支持import

```js
const { MSICreator } = require('electron-wix-msi');
const path = require('path')

const APP_DIR = path.resolve(__dirname, './dist/link-win32-x64/');
const OUT_DIR = path.resolve(__dirname, './dist/link-win32-x64-msi/');

// Step 1: Instantiate the MSICreator
const msiCreator = new MSICreator({
  appDirectory: APP_DIR,
  description: 'My amazing link simulator',
  exe: 'link',
  name: 'link',
  manufacturer: 'link Technologies',
  version: '1.1.2',
  outputDirectory: OUT_DIR
});

// Step 2: Create a .wxs template file
msiCreator.create().then(() => {
  // Step 3: Compile the template to a .msi file
  msiCreator.compile()
})
```

3. 最后使用Microsoft Store下载的MSIX Packaging Tool处理msi->msix流程, 这里msi同级目录有其他文件, 忽略即可.
  