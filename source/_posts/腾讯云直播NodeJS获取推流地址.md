---
layout: note
title: 腾讯云直播NodeJS获取推流地址
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
/**
* 获取推流地址
* 如果不传key和过期时间，将返回不含防盗链的url
* @param streamName 您用来区别不同推流地址的唯一流名称
* time 过期时间 sample 2019-12-10 23:59:59
* @return String url
*/
function getPushUrl(home_name, time) {
  const domain = 'rtmp://mp-live-push.777xian.com/live/'
  const key = '40219421e80ba3d01f2eca0575ee0328'
  // 生成16进制时间戳, 时间戳长度10位
  const tx_time = time.toString(16).toUpperCase()
  // md5加密混淆
  const tx_secret = md5(`${key}${home_name}${tx_time}`)
  return `${domain}${home_name}?txSecret=${tx_secret}&txTime=${tx_time}`
}

console.log(getPushUrl("username", 1575993599))
```
  