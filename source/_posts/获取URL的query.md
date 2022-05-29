---
layout: note
title: 获取URL的query
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
let urlSearch = location.search
let params = new Object()
if(urlSearch.indexOf("?") == 0) {
    let paramsString = urlSearch.substr(1)
    let paramLink = paramsString.split("&linkUrl=")
    params.linkUrl = paramLink[1]
    let paramsStrings = paramLink[0].split("&")
    for(let i = 0; i < paramsStrings.length; i++) {
        params[paramsStrings[i].split("=")[0]] = paramsStrings[i].split("=")[1]
    }
}
```
  