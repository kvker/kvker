---
layout: note
title: canvas圆形图片
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
// 绘制顶部用户头像
      const avatar_width = 30
      const avatar_height = 30
      const avatar_left = 12
      const avatar_top = 12
      ctx.save()
      ctx.beginPath()
      ctx.arc(avatar_left + 15, avatar_top + 15, 15, 0, Math.PI * 2, false)
      ctx.clip() //剪切路径
      ctx.drawImage(avatar, avatar_left, avatar_top, avatar_width, avatar_height)
```
  