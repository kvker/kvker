---
layout: note
title: 公众号自动登录验证userinfo与cookie
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
export default {
  data() {
    return {
      userinfo: {}
    }
  },
  computed: {
    hasLogin() {
      return !!this.userinfo.nickname
    }
  },
  mounted() { },
  methods: {
    // 登录或认证成功
    checked() {
      console.warn('登录成功,实现checked')
    },
    // 认证失败或过期重现验证
    reCheck() {
      localStorage.removeItem('USERINFO')
      this.checkUserinfo()
    },
    // 登录
    async login(code) {
      // 登录接口
      let { userWeixin } = await this.$post('/api/system/login/weixin', { acode: 123456, code })
      // 如果code失效拿不到数据,则重新核查一次
      if(!userWeixin) {
        this.reCheck()
        return
      }
      // console.log(res)
      localStorage.setItem('USERINFO', JSON.stringify(userWeixin))
      this.userinfo = userWeixin
      this.checked()
    },
    // 检查用户信息
    async checkUserinfo() {
      let code = this.$route.query.code
        , userinfo = localStorage.getItem('USERINFO')
        , userinfoObj = null
      try {
        userinfoObj = JSON.parse(userinfo)
      } catch(error) {
        localStorage.removeItem('USERINFO')
        userinfo = null
      }

      // 如果是登录成功回来
      if(code && !userinfo) {
        this.login(code)
        userinfo = localStorage.getItem('USERINFO')
      } else {
        // 如果有本地信息就直接配置wx SDK
        if(userinfo) {
          this.checked()
          this.userinfo = userinfoObj
          this.wxConfig()
        }
        // 如果没有则走登录流程
        else {
          this.getLoginUri()
        }
      }
    },
    async getLoginUri() {
      // 登录页
      let res = await this.$get('/api/system/login/weixin/authurl', { acode: 123456, uriKey: 'redirect_uri_test' })
      location.href = res.url
    },
    wxConfig() {
      return
      wx.config({
        debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: 'wx47f7698afc076b22', // 必填，公众号的唯一标识
        timestamp: '', // 必填，生成签名的时间戳
        nonceStr: '', // 必填，生成签名的随机串
        signature: '',// 必填，签名
        jsApiList: [] // 必填，需要使用的JS接口列表
      })
    }
  }
}
```
  