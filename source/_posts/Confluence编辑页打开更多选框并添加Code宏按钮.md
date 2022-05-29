---
layout: note
title: Confluence编辑页打开更多选框并添加Code宏按钮
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

油猴插件

网址匹配
https://your_web_sub_host.com/pages/resumedraft.action?*

```js
(() => {
  function $(selector) {
  	return document.querySelector(selector)
  }
  function $$(selector) {
  	return document.querySelectorAll(selector)
  }
	$('#content-insert-list').style.display = 'flex'
  let macro_code = null
  	let macro_insert_list = $('#macro-insert-list')
   macro_insert_list.style.display = 'flex'
  	macro_insert_list.insertAdjacentHTML('afterbegin', `<li class="dropdown-item macro-toc" style="width: 100px;cursor: pointer;" onclick="monkeyExtentsHandler.openMicroCode()"><span style="font-size: 14px;line-height: 27px;color: blue;">CODE</span></li>`)
  	$('#insert-menu-options').style.cssText = 'display: block !important; top: 0;left: 120px; visibility: visible;'
  
  window.monkeyExtentsHandler = {
  openMicroCode() {
    if(macro_code) macro_code.click()
    else {
    $('#rte-insert-macro').click()
    setTimeout(function() {
    macro_code = $('#macro-code')
      macro_code.click()
    }, 0)
  }
    }
  }
})()
```
  