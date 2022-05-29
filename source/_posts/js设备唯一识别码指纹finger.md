---
layout: note
title: js设备唯一识别码指纹finger
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```html
<script src="https://cdn.staticfile.org/fingerprintjs2/2.1.5/fingerprint2.min.js"></script>
<script>
  Fingerprint2.get(function (components) {
    var values = components.map(function (component) {
      return component.value
    })
    var murmur = Fingerprint2.x64hash128(values.join(''), 31)
    console.log(murmur)
  })
</script>
```
  