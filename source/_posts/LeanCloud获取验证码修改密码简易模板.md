---
layout: note
title: LeanCloud获取验证码修改密码简易模板
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

首先创建签名激活相关api

然后下面的updateUser得是云函数, 前端没权限

```js
tapVerCode(e) {
    if (this.data.phone.trim().length === 11) {
      app.AV.Cloud.requestSmsCode({
        mobilePhoneNumber: this.data.phone,
        name: 'ArtGallery',
        op: '修改密码',
        ttl: 10 // 验证码有效时间为 10 分钟
      }).then(() => {
        // 调用成功, 无返回值

      }, err => {
        // 调用失败
        console.log(err)
      })
    } else {
      wx.showToast({
        title: '手机号错误',
        icon: 'none',
      })
    }
  },
  tapSave() {
    // 校验
    let msg = ''
    let {
      password,
      password_again
    } = this.data
    if (password != password_again) msg = '两次密码不一致'
    else if (!password_again) msg = '请输入确认密码'
    else if (!password) msg = '请输入新密码'
    if (msg) {
      wx.showToast({
        title: msg,
        icon: 'none',
      })
      return
    }
    app.AV.Cloud.verifySmsCode(this.data.code, this.data.phone).then(async() => {
      const res = await app.http.avRead('_User', q => {
        q.equalTo('mobilePhoneNumber', this.data.phone)
      })
      const user = res[0]
      if (user) {
        // 验证成功, 无返回值
        await app.AV.Cloud.run('updateUser', {
          objectId: user.objectId,
          password: this.data.password,
        })
        wx.navigateBack()
      } else {
        wx.showToast({
          title: '无此用户',
          icon: 'none',
        })
      }
    }, function(err) {
      //验证失败
      wx.showModal({
        title: '提示',
        content: '验证码不匹配',
      })
    })
  },
```
