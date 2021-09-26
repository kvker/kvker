class Base extends KK {
  constructor(data) {
    super(data)
    if(this.queryID('account')) {
      this.queryID('account').addEventListener('click', this.clickAccount.bind(this))
    }
    this.url = {
      cf: 'https://cf.ilikecats.cn/release/wx_gzh_img',
    }
    try {
      this.user = av.currentUser()
    } catch (error) {
      // console.error(error)
    }
    if(this.user) {
      this.userinfo = this.user.toJSON()
      this.update({
        account: this.userinfo.username
      })
    }
  }

  get(url, data, payload) {
    return this.request(url, data, 'GET', payload)
  }

  post(url, data, payload) {
    return this.request(url, data, 'POST', payload)
  }

  request(url, data = {}, method = 'GET', payload = {}) {
    let option = {
      method,
      credentials: 'same-origin',
      ...payload,
    }
    if(method === 'GET' || method === 'HEAD') {
      url += '?' + Object.keys(data).reduce((p, c) => {
        p += `${c}=${data[c]}&`
        return p
      }, '')
    } else {
      option.body = JSON.stringify(data)
    }
    return new Promise((resolve, reject) => {
      fetch(url, option).then(async ret => {
        ret.json().then(ret => {
          // console.log(ret)
          if(ret.code === 200) {
            resolve(ret.result)
          } else {
            alert(ret.msg)
            reject(ret.msg)
          }
        })
      })
    })
  }

  clickAccount() {
    if(this.user) {
      this.el.account.removeEventListener('click', this.clickAccount)
      av.logout().then(_ => {
        this.update({
          account: '账号',
        })
        this.user = av.currentUser()
        this.userinfo = null
        if(this.listenLogout) {
          this.listenLogout()
        }
      })
    } else {
      let username = prompt('请输入你的唯一id')
      if(!username) {
        return
      }
      av.login(username, '123456').then(user => {
        this.user = user
        this.userinfo = user.toJSON()
        this.update({
          account: this.userinfo.username,
        })
        if(this.listenLogin) {
          this.listenLogin()
        }
        this.el.account.addEventListener('click', this.clickAccount)
      }).catch(alert)
    }
  }
}