---
layout: note
title: vue验证码实例
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```html
<div class="input-container">
  <input v-model="userInfo.checkCode" placeholder="验证码" />
  <button class="check-butotn"
    @click="getCertificationCode">{{check_string}}</button>
  <span>*</span>
</div>
```

```js
data() {
      return {
        is_loop: false,
        check_string: '发送验证码',
        loop_time: 60,
      }
    },


getCertificationCode() {
        if (this.is_loop) return
        else this.is_loop= true

        this.check_string = this.loop_time + 's'
        this.checkLoop = setInterval(() => {
          this.check_string = --this.loop_time + 's'
          if (this.loop_time < 1) {
            this.loop_time = 60
            this.check_string = '获取验证码'
            this.is_loop= false
            clearInterval(this.checkLoop)
          }
        }, 1000)
      },

```

## mixin

```js
export default {
  data() {
    return {
      is_loop: false,
      check_string: '发送验证码',
      loop_time: 60,
    }
  },
  methods: {
    runCountdown() {
      this.check_string = `重新发送(${this.loop_time}s)`
      this.checkLoop = setInterval(() => {
        this.check_string = `重新发送(${--this.loop_time}s)`
        if (this.loop_time < 1) {
          this.loop_time = 60
          this.check_string = '获取验证码'
          this.is_loop = false
          clearInterval(this.checkLoop)
        }
      }, 1000)
    },
    // 调用的示例
    clickSendCode() {
      if (this.is_loop) return
      else this.is_loop = true
        
      this.$api.sendCode({
        phone: this.phone
      }).then(ret => {
        this.$toast({
          title: '发送成功'
        })
        this.runCountdown()
      })
    },
  },
}
// <button class="ver-code-button" type="default" @click="clickSendCode">{{check_string}}</button>
```
  