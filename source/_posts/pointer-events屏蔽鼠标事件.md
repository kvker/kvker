---
layout: note
title: pointer-events屏蔽鼠标事件
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```css
dom {
  pointer-events: auto;
  pointer-events: none;
}
```

默认是auto，即正常。

若为none，则无法使用鼠标交互，即使是调试器的箭头也无法选择。

用处：

1. 实现蒙版效果
2. 实现水印效果
3. 滚动时候给body上none，可以减少元素hover影响到的性能，记得滚完了设置auto。。。
  