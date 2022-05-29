---
layout: note
title: vue登录页面实例
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

含忘记密码, 验证码等

```html
<template>
  <div class="login-page">
    <div class="flex aic head">
      <!-- <img src="logo" alt="logo" /> -->
      <p>LOGO</p>
      <div class="v-line"></div>
    </div>
    <div class="flex aic jcc content-box">
      <div class="flex-c aic jcc logo-box">
        <p>淘宝直播</p>
        <p>数据平台</p>
        <p>LOGO</p>
      </div>

      <div v-if="is_forget" class="forget-box">
        <div class="flex switch-box cp">
          <p>找回密码</p>
        </div>
        <div class="flex-c jcc aic account-box">
          <input type="text" placeholder="请输入手机号" />
          <div class="verify-box">
            <input v-model="verify_code" placeholder="验证码" />
            <button class="verify-button" @click="getCertificationCode">{{verify_string}}</button>
          </div>
          <input type="password" placeholder="请输入6-15位的密码组合" />
          <button class="button">立即登录</button>
          <p class="cp" style="color: var(--main_color);" @click="is_forget = false">返回登录</p>
        </div>
      </div>

      <div class="login-box" v-else>
        <div class="flex switch-box cp">
          <p :class="{selected: !selected_idx}" @click="selected_idx = 0">扫码登录</p>
          <p :class="{selected: selected_idx}" @click="selected_idx = 1">密码登录</p>
        </div>
        <div class="flex-c aic qr-box" v-if="!selected_idx">
          <img src="~@/static/img/ico_qrcode_dark@2x.png" alt="qr-code" class="qr-code" />
          <p>欢迎使用普思数据</p>
          <p>使用微信扫码登录，新用户自动注册</p>
        </div>
        <div v-else class="flex-c jcc aic account-box">
          <input type="text" placeholder="请输入手机号" />
          <input type="password" placeholder="请输入登录密码" />
          <button class="button">立即登录</button>
          <p class="cp" @click="is_forget = true">忘记密码?</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'empty',
  data() {
    return {
      selected_idx: 1,
      is_forget: false,
      verify_code: '',
      verify_string: '获取验证码',
      loop_time: 60,
      is_loop: false,
    }
  },
  methods: {
    getCertificationCode() {
      if(this.is_loop) return
      else this.is_loop = true

      this.verify_string = this.loop_time + 's'
      this.checkLoop = setInterval(() => {
        this.verify_string = --this.loop_time + 's'
        if(this.loop_time < 1) {
          this.loop_time = 60
          this.verify_string = '获取验证码'
          this.is_loop = false
          clearInterval(this.checkLoop)
        }
      }, 1000)
    },
  },
}
</script>

<style scope lang="less">
.login-page {
  background: white;
  .head {
    height: 65px;
    p {
      font-size: 36px;
      color: #f84e0b;
      margin: 0 32px;
    }
    .v-line {
      width: 1px;
      height: 42px;
      background: #ebebeb;
    }
  }
  .content-box {
    width: 100%;
    height: calc(100vh - 65px);
    background: url("~@/static/img/bg_login@2x.png") 0 0 ~"/" 100% 100% no-repeat;
    .logo-box {
      width: 262px;
      height: 448px;
      background: pink;
      p {
        font-weight: bold;
        font-size: 32px;
        color: #ffffff;
        &:nth-child(3) {
          margin-top: 180px;
        }
      }
    }
    .login-box,
    .forget-box {
      width: 420px;
      height: 400px;
      border-radius: 10px;
      background-color: white;
      .switch-box {
        line-height: 100px;
        text-align: center;
        font-size: 16px;
        p {
          flex: 1;
          &.selected {
            color: var(--main_color);
          }
        }
      }
      .qr-box {
        font-size: 13px;
        .qr-code {
          width: 200px;
          height: 200px;
          margin-bottom: 24px;
        }
      }
      .account-box {
        input {
          width: 270px;
          height: 38px;
          line-height: 38px;
          background: #f8f8f8;
          border: 1px solid #eeeeee;
          border-radius: 0;
        }
        ::-webkit-input-placeholder {
          color: #adadad;
        }
        .button {
          width: 270px;
          line-height: 38px;
          margin-bottom: 12px;
          color: white;
          background-image: linear-gradient(90deg, #ff8300 0%, #ff5204 100%);
          border-radius: 4px;
        }
        p {
          width: 270px;
          text-align: right;
          font-size: 13px;
          color: var(--low_color);
        }
      }
    }
    .login-box {
      .account-box {
        input {
          &:nth-child(1) {
            margin: 40px 0 20px;
          }
        }
        .button {
          margin-top: 34px;
        }
      }
    }
    .forget-box {
      .account-box {
        .verify-box {
          width: 270px;
          input {
            width: 160px;
          }
          .verify-button {
            width: 100px;
            height: 38px;
            border: 1px solid #eeeeee;
          }
        }
        input {
          margin-bottom: 20px;
        }
      }
    }
  }
}
</style>
```
  