---
layout: note
title: nodejs-mysql工具链
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

util文件夹下

## mysql.js

```js
const mysql = require('mysql')
// const is_dev = process.env.PORT === '3002'

console.log('process.env.PORT: ' + !!process.env.PORT)
let database = !!process.env.PORT ? 'xxx_test' : 'xxx'
console.log(database)

let option = {
  host: '',
  port: 3306,
  user: '',
  password: '',
  database,
  // 多行支持
  multipleStatements: true,
  // 编码支持emoji
  charset: "utf8mb4",
  connectionLimit : 10,
}

// 返回连接池
module.exports = {
  pool: mysql.createPool(option),
}
```

## jwt.js

```js
const jwt = require('jsonwebtoken')
const private_key = 'xxx_token_2020'

module.exports = {
  /**
   * 加密
   * @param {any} data 加密数据
   * @param {string|number} time 加密时长, 默认30天
   */
  encrypt(data, time = '30d') {
    return jwt.sign(data, private_key, { expiresIn: time })
  },
  /**
   * 解密
   * @param {string} token 需要解密的密文
   */
  decrypt(token) {
    try {
      const data = jwt.verify(token, private_key)
      return {
        token: true,
        data
      }
    } catch(error) {
      return {
        token: false,
        error,
      }
    }
  }
}

```

## util.js

```js
const fs = require('fs')
const dayjs = require('dayjs')
const mysql = require('mysql')
const { pool } = require('./mysql')

module.exports = {
  success(result, code = 200) {
    return {
      code,
      result,
    }
  },
  fail(error, msg = '请求错误', code = -1) {
    fs.writeFile('../error.log', JSON.stringify({
      time: dayjs().format('YYYY-MM-DD HH:mm:ss'),
      error,
    }), (err, data) => {
      if (err) console.error(err)
    })
    return {
      code,
      error,
      msg,
    }
  },
  /**
   * 处理搜索
   * @param {*} sql sql语句
   * @param {*} data 如果sql中有"?"，那么这里可以传数组，跟mysql.format一样
   * @returns Promise
   */
  sqlHandle(sql, data) {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) reject(err)
        else {
          connection.query(sql, data, (error, result) => {
            connection.release()
            if (error) reject(error)
            else resolve(result)
          })
        }
      })
    })
  },
  /**
   * 事务句柄
   * @param {*} sql sql语句
   * @param {*} data 如果sql中有"?"，那么这里可以传数组，跟mysql.format一样
   * @returns Promise
   */
  sqlTransactionHandle(sql, data) {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        connection.query(sql, data, (error, result) => {
          connection.release()
          if (error) {
            pool.rollback(() => {
              throw reject(error)
            })
          }
          else resolve(result)
        })
      })
    })
  },
  /**
   * mysql事务函数
   * @param {array}} list 事务sql与values, 分别是sql与data
   */
  transaction(list) {
    return new Promise((resolve) => {
      pool.getConnection((err, connection) => {
        // 加分与日志事务
        connection.beginTransaction(async error => {
          if (error) { throw error }
          const result = []
          for (const item of list) {
            // 更新分数
            try {
              result.push(await this.sqlTransactionHandle(item.sql, item.data))
            } catch (error) {
              throw error
            }
          }
          // 事务提交
          connection.commit(function (err) {
            connection.release()
            if (err) {
              return connection.rollback(function () {
                throw err
              })
            }
            // console.log('success!')
            resolve(result)
          })
        })
      })
    })
  },
  /**
   * 使用dayjs格式化日期
   * @param {any} time 时间
   * @param {string} format 定制格式
   */
  formatDate(time = new Date(), format) {
    return dayjs(time).format(format || 'YYYY-MM-DD')
  },
  /**
   * 对比今天是明天今天昨天前天等
   * @param {any} time 时间
   */
  formatDateDayByDay(time) {
    const cur = dayjs()
    const diff = dayjs(time).diff(cur, 'day')
    if (Math.abs(diff) > 2) {
      const day = dayjs(time).date()
      return {
        day: ~~(day / 10) ? day : `0${day}`,
        month: dayjs(time).month() + 1,
      }
    } else {
      let day
      switch (diff) {
        case 2:
          day = '后天'
          break
        case 1:
          day = '明天'
          break
        case 0:
          day = '今天'
          break
        case -1:
          day = '昨天'
          break
        case -2:
          day = '前天'
          break
      }
      return {
        day,
      }
    }
  },
  /**
   * 数字整数部分保持一定长度，不足用0补充，比如时间
   * @params {number} num 传入的数字
   * @params {number} length 数字左侧留着的长度，默认2是作为常用倒计时
   */
  pointLeftNumberLength(num, length = 2) {
    if (typeof (num) === 'number') {
      let numStr = String(num)
      let leftLength = numStr.split('.')[0].length
      if (length > leftLength) {
        let lengthCut = length - leftLength
        let zeroStr = Array.from({
          length: lengthCut
        }, () => '0').join('')
        numStr = zeroStr + numStr
      }
      return numStr
    } else {
      throw '传数字类型!'
    }
  }
}
```
  