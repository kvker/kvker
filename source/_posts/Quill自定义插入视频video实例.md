---
layout: note
title: Quill自定义插入视频video实例
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
import Quill from 'quill'

const BlockEmbed = Quill.import('blots/block/embed')
class VideoBlot extends BlockEmbed {
  static create(value) {
    let node = super.create()
    node.setAttribute('src', value.url)
    node.setAttribute('controls', value.controls)
    node.setAttribute('width', value.width)
    node.setAttribute('height', value.height)
    node.setAttribute('webkit-playsinline', true)
    node.setAttribute('playsinline', true)
    node.setAttribute('x5-playsinline', true)
    return node;
  }

  static value(node) {
    return {
      url: node.getAttribute('src'),
      controls: node.getAttribute('controls'),
      width: node.getAttribute('width'),
      height: node.getAttribute('height')
    };
  }
}

VideoBlot.blotName = 'simple_video'
VideoBlot.tagName = 'video'
Quill.register(VideoBlot)

// 使用
this.quill.insertEmbed(range.index, 'simple_video', {
  url,
  controls: 'controls',
  width: '100%',
  height: '100%'
})
```
  