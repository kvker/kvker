---
layout: note
title: template标签直接写es6语法
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
{/* <template id="demo_tempalte">
  <div>
    <p>${p}</p>
    <a href="${href}">${a}</a>
  </div>
</template> */}

String.prototype.template2string = function (params) {
  const keys = Object.keys(params)
  const values = Object.values(params)
  return new Function(...keys, `return \`${this}\``)(...values)
}

String.prototype.temp2str = String.prototype.template2string

const demp_template_string = document.querySelector('#demo_tempalte').innerHTML.temp2str({
  p: 'im p',
  href: 'https://www.baidu.com',
  a: 'im a',
})

console.log({ demp_template_string })
```
  