---
layout: note
title: bootstrap4生成页码
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
/**
 * 渲染页码器
 * @param {number} count 总数
 * @param {number} page 当前页, 0开始
 * @param {number} size 每页显示数量
 */
function renderPagination(count, page = 0, size = 10) {
  var length = Math.ceil(count / size)
  var html = '<ul class="pagination mx-auto">\
    <li class="page-item ' + (!page && 'disabled') + '">\
      <a class="page-link" href="' + location.pathname +'?page=' + (page ? page - 1 : page) + '">上一页</a>\
    </li>'
      for(var i = 0; i < length; i++) {
        html += '<li class="page-item ' + (page === i ? 'active' : '') + '"><a class="page-link" href="' + location.pathname +'?page=' + i + '">' + (i + 1) + '</a></li>'
      }
      html += '<li class="page-item ' + (page + 1 >= length && 'disabled') + '">\
      <a class="page-link" href="' + location.pathname +'?page=' + (page + 1 >= length ? length : page + 1) + '">下一页</a>\
    </li>\
  </ul>'
  $('#pagination').html(html)
}
```
  