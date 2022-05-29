---
layout: note
title: html字符创建模板
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
// 通过createContextualFragment
let template = `<div class="player" id="${player.nickname}" style="translate(${player.latitude}px, ${player.longitude}px);">
  <p class="nickname">${player.nickname}</p>
    <div class="hp-bar">
      <div class="current-hp-bar" style="width: ${player.hp / player.hp_max * 100}%;"></div>
    </div>
    <p class="hp">${player.hp}/${player.hp_max}</p>
  <img src="/img/player_test.jpg" alt="player-img">
</div>`
let dom = document.createRange().createContextualFragment(template).firstChild

// 空div创建
let template = `<div class='child'>${txt}</div>`
let tempNode = document.createElement('div')
tempNode.innerHTML = template
let dom = tempNode.firstChild
```
  