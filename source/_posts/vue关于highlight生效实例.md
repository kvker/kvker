---
layout: note
title: vue关于highlight生效实例
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```vue
<template>
<div class="home">
<textarea class="main-t" v-model="value" name="" id="" cols="30" rows="10"></textarea>
<div class="main-i" v-html="result" />
</div>
</template>

<script>
// @ is an alias to /src
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'
const md = new MarkdownIt({
highlight: function(str, lang) {
if (lang && hljs.getLanguage(lang)) {
try {
return (
'<pre class="hljs"><code>' +
hljs.highlight(lang, str, true).value +
'</code></pre>'
)
} catch (__) {}
}

return (
'<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>'
)
}
})

export default {
name: 'home',
data() {
return {
value: '' // textarea 模板内容
}
},
computed: {
/**
* 生成内容
*/
result() {
return md.render(this.value)
}
},
mounted() {},
updated() {
hljs.initHighlightingOnLoad()
}
}
</script>

<style lang="less" scoped>
.home {
display: flex;
height: 100%;
}

.main-t {
width: 50%;
height: 100%;
resize: none;
font-size: 21px;
}

.main-i {
width: 50%;
height: 100%;
}
</style>
```
  