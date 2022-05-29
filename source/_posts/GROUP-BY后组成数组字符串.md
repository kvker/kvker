---
layout: note
title: GROUP-BY后组成数组字符串
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```sql
xxx
GROUP_CONCAT(CONVERT(x.status,CHAR)) as train_status_list, GROUP_CONCAT(CONVERT(x.train_id, CHAR)) as train_id_list
xxx
GROUP BY id
```

  