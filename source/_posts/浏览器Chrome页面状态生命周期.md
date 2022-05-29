---
layout: note
title: 浏览器Chrome页面状态生命周期
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

## 状态

* active
* passive
* hidden
* frozen 浏览器停止执行可冻结的事件，比如js计时器和fetch的回调，都不会再进行了。这是一种节约资源的手段。
* terminated 页面一旦开始unload，并从内存中被浏览器清掉，就是被terminated(终结)了。
* discarded

## 事件

* focus
* blur
* visibilitychange
* freeze 任务不会再执行
* resume 浏览器重新启动了一个冻结的页面
* pageshow
* pagehide
* beforeunload 仅仅用于提醒用户别忘了保存，不可滥用！
* unload 永远不要使用这个事件！

## 示例代码

```js
// 监听浏览器状态
document.addEventListener('visibilitychange', e => {
  // console.log(e)
  if(document.visibilityState === 'visible') {
    // 融云重连
    this.ry.reconnect()
  }
  // 测试重连
  // else if (document.visibilityState === 'hidden'){
  //   this.ry.disconnect()
  // }
})
```
  