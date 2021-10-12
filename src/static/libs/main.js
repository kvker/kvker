'use strict'

!(function () {
  const els = {}
  window.el = new Proxy(els, {
    get: (target, key) => {
      if (key in target) return target[key]
      else {
        if (key.match(/^\w/)) target[key] = $(`#${key}`) || $(`${key}`)
        else target[key] = $(key)
        return target[key]
      }
    },
    set: (target, name, value) => {
      target[name] = value
    },
  })

  window.$ = (selector) => document.querySelector(selector)
  window.$$ = (selector) => document.querySelectorAll(selector)
  window.loading = () => (document.body.style.opacity = 0.5)
  window.unloading = () => (document.body.style.opacity = 1)

  window.user = av.currentUser()
  window.userinfo = null

  window.is_pwa = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone || document.referrer.includes('android-app://')

  if (!is_pwa) {
    el.account.style.display = 'block'
    el.tool.style.display = 'block'
  }

  window.searchParams = new URL(location.href).searchParams

  window.clickAccount = function () {
    if (user) {
      el.account.removeEventListener('click', clickAccount)
      av.logout().then((_) => {
        account.innerText = '账号'
        user = av.currentUser()
        userinfo = null
        listenLogout()
      })
      el.account.addEventListener('click', clickAccount)
    } else {
      let username = prompt('请输入你的唯一id')
      if (!username) {
        return
      }
      av.login(username, '123456')
        .then((ret) => {
          user = ret
          userinfo = user.toJSON()
          el.account.innerText = userinfo.username
          listenLogin()
        })
        .catch(alert)
    }
  }
  el.account.addEventListener('click', clickAccount)

  if (user) {
    userinfo = user.toJSON()
    el.account.innerText = userinfo.username
  }
})()
