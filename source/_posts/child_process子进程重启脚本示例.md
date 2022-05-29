---
layout: note
title: child_process子进程重启脚本示例
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
var express = require('express')
var router = express.Router()
var { exec, spawn } = require('child_process')

/* GET users listing. */
router.post('/restart_pre', function(req, res, next) {
  let log = new Date().toLocaleString()
  let builder = spawn('npm', ['run', 'build'], {
    cwd: '/Users/zweizhao/projects/out/little_know/client_boss',
  })
  builder.stdout.on('data', data => {
    let string = data.toString()
    console.log(string)
    log += string
  })
  builder.stderr.on('data', (err) => {
    // console.error(`stderr: ${err}`)
    // console.log(err)
    // log += err.toString()
  })
  builder.on('close', (code) => {
    log += `\nbuilder 进程退出，退出码 ${code}\n`
    // console.log(log)
    pm2erHandler()
  })

  function pm2erHandler() {
    let pm2er = spawn('pm2', ['restart', 'client'], {
      cwd: '/Users/zweizhao/projects/out/little_know/client_boss',
    })
    pm2er.stdout.on('data', data => {
      let string = data.toString()
      console.log(string)
      log += string
    })
    pm2er.stderr.on('data', (err) => {
      // console.error(`stderr: ${err}`)
      // console.log(err)
      // log += err.toString()
    })
    pm2er.on('close', (code) => {
      log += `\npm2 进程退出，退出码 ${code}\n`
      log += new Date().toLocaleString()
      // console.log(log)
      res.send(log)
    })
  }
})

/* GET users listing. */
router.post('/restart_pro', function(req, res, next) {
  res.send('respond with a resource')
})

module.exports = router

```
  