---
layout: note
title: uniapp语音识别接入实例
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

可用来应付苹果审核的麦克风权限(比如用直播处理人脸识别时候)

```html
<template>
  <view class="page">
    <view class="title text-center bold">请输入验证码</view>
    <view class="remind-box flex jcsb aic">
      <text class="remind">已发送至手机 {{phone}}</text>
      <text class="count-down main-color" @click="checkRealPerson">{{check_string}}</text>
    </view>
    <myp_one style="margin-top: 48rpx;" @finish="finished" type="box" :maxlength="6"></myp_one>
  </view>
</template>

<script>
  import count_down_mixin from '@/mixins/count_down'
  import permission from '@/assets/lib/permission.js'

  export default {
    mixins: [count_down_mixin],
    data() {
      return {
        phone: '',
        code_length: 6,
        code: '',
        focus_index: 0,
        // 0为验证码登录, 1为找回密码,4为更换绑定手机号
        type: '',
      }
    },
    onLoad(options) {
      this.phone = options.phone
      this.type = options.type
    },
    methods: {
      checkRealPerson() {
        let continue_handler = () => {
          if (this.type === '4') {
            this.sendCodePhone()
          } else if (this.type === '1') {
            this.rebackSendCode()
          } else {
            this.clickSendCode()
          }
        }
        if (this.$is_ios) {
          plus.speech.startRecognize({
            engine: 'iFly'
          }, (text) => {
            console.log(text)
            text.length && continue_handler()
          }, function(e) {
            console.log("语音识别失败：" + e.message)
            uni.showToast({
              title: e.message,
              icon: 'error'
            })
          })
          let record_permission = permission.judgeIosPermission('record')
          if (!record_permission) {
            uni.showModal({
              title: '提示',
              content: '未授权麦克风, 请前往授权',
              success: (ret) => {
                if (ret.confirm) {
                  permission.gotoAppPermissionSetting()
                }
              }
            })
            return
          }
        } else {
          continue_handler()
        }
      },
      finished(val) {
        switch (this.type) {
          case '1':
            uni.navigateTo({
              url: `/pages/account/new_password/new_password?ver_code=${val}&phone=${this.phone}`
            })
            break
          case '2':
            uni.navigateTo({
              url: `/pages/mine/person/input_phone/input_phone`
            })
            break
          case '3':
            uni.navigateBack()
            break
          case '4':
            this.savePhone({
              val
            })
            break
          default:
            this.loginByPhone({
              val
            })
        }
      },
      rebackSendCode() {
        if (this.is_loop) return
        else this.is_loop = true

        this.$api.sendSmsCode({
          phone: this.phone
        }).then(ret => {
          this.$toast({
            title: '发送成功'
          })
          this.runCountdown()
        })
      },
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
      loginByPhone({
        val
      }) {
        this.$api.loginByPhone({
          username: this.phone,
          password: val,
        }).then(ret => {
          // console.log(ret)
          uni.setStorageSync('userinfo', ret)
          this.$app.userinfo = ret
          this.$getBaiduConfig()
          uni.reLaunch({
            url: '/pages/mine/mine'
          })
        })
      },
      sendCodePhone() {
        if (this.is_loop) return
        else this.is_loop = true

        this.$api.sendPhoneCode({
          phone: this.phone
        }).then(ret => {
          this.$toast({
            title: '发送成功'
          })
          this.runCountdown()
        })
      },
      savePhone({
        val
      }) {
        this.$api.updatePhone({
          phone: this.phone,
          varCode: val
        }).then(ret => {
          uni.showToast({
            title: '更换成功,请重新登录！',
            icon: 'none',
            duration: 2000,
          })
          setTimeout(() => {
            this.$api.logout().then(ret => {
              uni.setStorageSync('userinfo', null)
              this.$app.userinfo = null
              uni.reLaunch({
                url: '/pages/account/login/login'
              })
            })
          }, 2000)
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .page {
    padding: 0 64rpx;
  }

  .title {
    margin: 48rpx 0;
  }

  .remind-box {
    font-size: 32rpx;
  }

  .remind {
    color: var(--lower_color);
  }

  .count-down {}

  .code-input {
    position: relative;
    width: 100%;
    height: 128rpx;
    border: none;
    letter-spacing: 100rpx;
    z-index: 1;
  }

  .apron-box {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .apron {
    width: 90rpx;
    height: 142rpx;
    background-color: var(--bg_color);
    border-radius: 16rpx;
  }
</style>
```
  