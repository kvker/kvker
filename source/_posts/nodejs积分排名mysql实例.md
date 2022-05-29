---
layout: note
title: nodejs积分排名mysql实例
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
/**
 * 积分排名
 */
app.get('/integral/rank', async (req, res) => {
  // type 1星期11月22总
  const { type, user_id } = req.query
  let start_timestamp
  let end_timestamp
  let sql
  let self_sql
  const is_week = +type === 1
  const is_month = +type === 11
  const is_total = +type === 22
  // 总榜sql不同
  if(!is_total) {
    if(is_week) {
      start_timestamp = dayjs().startOf('week').subtract(6, 'day').unix()
      end_timestamp = dayjs().endOf('week').subtract(6, 'day').unix()
    } else if(is_month) {
      start_timestamp = dayjs().subtract(1, 'month').startOf('month').unix()
      end_timestamp = dayjs().subtract(1, 'month').endOf('month').unix()
    }
    // console.log(start_timestamp)
    // console.log(end_timestamp)
    sql = `
      SELECT u.user_id, u.nickname, u.avatarurl, sum(il.integral) as sum_integral
      FROM xxx.b as il
      LEFT JOIN xxx.a as u ON u.user_id=il.user_id
      WHERE il.time >= ${start_timestamp} and  il.time <= ${end_timestamp}
      GROUP BY il.user_id
      ORDER BY sum_integral desc
    `
  } else {
    sql = `
      SELECT avatarurl, nickname, integral_total as sum_integral FROM xxx.a order by integral_total desc limit 18;
    `
    self_sql = `
      select count(*) as rank, t1.* from xxx.a, (select integral_total, nickname from xxx.a where user_id = ${user_id} limit 1) as t1 where a.integral_total > t1.integral_total;
    `
  }
  try {
    // console.log(sql)
    const result = await util.sqlHandle(sql)
    const self = {
      rank: '未上榜',
      sum_integral: 0,
    }
    if(self_sql) {
      const self_result = await util.sqlHandle(self_sql)
      self.rank = self_result[0].rank
      self.sum_integral = self_result[0].integral_total
    } else {
      result.forEach((i, idx) => {
        if(i.user_id === +user_id) {
          self.rank = idx + 1
          self.sum_integral = i.sum_integral
        }
      })
    }
    if(result.length > 18) {
      result.length = 18
    }
    res.json(util.success({
      list: result,
      self,
    }))
  } catch(error) {
    console.log(util.fail(error.sqlMessage))
  }
})
```
  