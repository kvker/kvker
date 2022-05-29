---
layout: note
title: Mac的AB测试
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

`ab -n 1 -c 1 https://www.007vin.com/ | grep Requests -3`
-n 用户数，-c 并发数

```sh
# 吞吐量，用户等待时间，后台反应时间
Requests per second:    79.44 [#/sec] (mean)
Time per request:       1258.872 [ms] (mean)
Time per request:       12.589 [ms] (mean, across all concurrent requests)
```
  