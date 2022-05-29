---
layout: note
title: CSS自定义CheckBox
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```css
<label>
  <input type="checkbox" />
  记住密码
  <div class="show-box" />
</label>
label {
  position: relative;
  cursor: pointer;

  input {
    cursor: pointer;
  }

  input:checked + .show-box {
    border: 1px solid #d8d8d8;
    box-sizing: border-box;
    background: white;
  }

  .show-box {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 16px;
    height: 16px;
    border-radius: 2px;
    background: @eColor;

    &::before {
      content: '';
      position: absolute;
      top: 2px;
      left: 6px;
      width: 3px;
      height: 8px;
      border: solid white;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
  }
}
```
  