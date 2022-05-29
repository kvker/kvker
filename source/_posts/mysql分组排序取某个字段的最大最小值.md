---
layout: note
title: mysql分组排序取某个字段的最大最小值
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```
SELECT A.* FROM test A,
(SELECT aid, MAX(day) max_day FROM test GROUP BY aid) B
WHERE A.aid = B.aid AND A.day = B.max_day
```

最小则为min
  