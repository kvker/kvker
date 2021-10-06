'use strict'

!(function () {
  const els = {}
  window.el = new Proxy(els, {
    get: (target, key) => {
      if (key in target) return target[key]
      else {
        if (key.match(/^\w/)) target[key] = $(`#${key}`)
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
})()
