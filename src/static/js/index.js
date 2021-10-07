'use strict'

!(function () {
  const ART_LIST = 'art_list'
  let card_list = []
  el.account.addEventListener('click', clickAccount)
  el.search_input.addEventListener('keypress', inputKeypress)
  el.search_btn.addEventListener('click', search)
  el.refresh_btn.addEventListener('click', refresh)
  el.add_btn.addEventListener('click', clickAddArticle)

  getList()

  if (user) {
    el.add_btn.style.display = 'inline'
  }
  /**
   * 获取列表
   */
  function getList() {
    let local_list = JSON.parse(localStorage.getItem(ART_LIST))
    if (local_list) {
      card_list = local_list
      renderCardList(card_list)
    } else {
      refresh()
    }
  }

  /**
   * 刷新列表
   */
  function refresh() {
    cleanCardList()
    getCardList().then((ret) => {
      card_list = ret
      localStorage.setItem(ART_LIST, JSON.stringify(card_list))
      renderCardList(card_list)
    })
  }

  function getCardList() {
    loading()
    return av
      .read('Note', (q) => {
        q.descending('updatedAt')
        q.select(['title', 'summary', 'content'])
        q.limit(1000)
      })
      .then((ret) => {
        if (ret) {
          unloading()
          return ret.map((i) => i.toJSON())
        }
      })
      .catch((error) => {
        console.error(error)
        return []
      })
      .finally(unloading)
  }

  function clickAccount() {
    if (user) {
      el.account.removeEventListener('click', clickAccount)
      av.logout().then((_) => {
        account.innerText = '账号'
        user = av.currentUser()
        userinfo = null
        listenLogout()
      })
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
          el.account.addEventListener('click', clickAccount)
        })
        .catch(alert)
    }
  }

  function listenLogin() {
    el.add_btn.style.display = 'inline'
  }

  function listenLogout() {
    el.add_btn.style.display = 'none'
    el.account.addEventListener('click', clickAccount)
  }

  function clickAddArticle() {
    location.href = `art-edit.html`
  }

  function inputKeypress(e) {
    let code = e.keyCode
    if (code === 13) {
      search()
    }
  }

  function search() {
    let val = el.search_input.value
    let list = card_list
    if (val) {
      list = card_list.filter((i) => i.title.includes(val) || (i.summary || '').includes(val) || i.content.includes(val))
    }
    if (list.length) {
      renderCardList(list)
    } else {
      open(`https://www.baidu.com/s?ie=utf-8&wd=${val}`)
    }
  }

  function cleanCardList() {
    card_list.innerHTML = ''
  }

  function renderCardList(list) {
    el.card_list.innerHTML = list.reduce((p, c) => (p += `
    <div class="card pb-2 pt-2 mb-2">
      <div class="card-body">
        <a class="text-info card-link" href="art-detail.html?id=${c.objectId}">${c.title}</a>
      </div>
    </div>
    `), '')
  }
})()
