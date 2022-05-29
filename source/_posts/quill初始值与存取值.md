---
layout: note
title: quill初始值与存取值
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

## 初始值

```js
this.quillEditor.clipboard.dangerouslyPasteHTML(0, text)
```

## 存取

```js
  getValue() {
    // we want the content, not some Delta thingy or plain text without the formatting
    return this.quillEditor.root.innerHTML
  }

  setValue(text) {
    // resets the editor to empty
    this.quillEditor.setContents([])
    // initialize the content to exactly what we have in our server (i.e. what we saved the last time as validated/sanitized by our server)
    this.quillEditor.clipboard.dangerouslyPasteHTML(0, text)
  }
```
  