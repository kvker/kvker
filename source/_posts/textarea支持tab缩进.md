---
layout: note
title: textarea支持tab缩进
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
//textarea支持tab缩进
    $("textarea").on(
            'keydown',
            function(e) {
                if (e.keyCode == 9) {
                    e.preventDefault();
                    var indent = '    ';
                    var start = this.selectionStart;
                    var end = this.selectionEnd;
                    var selected = window.getSelection().toString();
                    selected = indent + selected.replace(/\n/g, '\n' + indent);
                    this.value = this.value.substring(0, start) + selected
                            + this.value.substring(end);
                    this.setSelectionRange(start + indent.length, start
                            + selected.length);
                }
            })
```
  