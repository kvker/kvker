'use strict'

!(function () {
  if (!is_pwa) {
    el.header.style.display = 'block'
    el.footer.style.display = 'block'
    el.refresh_btn.style.display = 'block'
    el.add_btn.style.display = 'block'
  } else {
    resizeTo(400, 800)
    el.input_box.style.top = '.5rem'
  }

  const ART_LIST = 'art_list'
  let card_list = []
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
    localforage.getItem(ART_LIST).then(function (local_list) {
      if (local_list) {
        card_list = local_list
        renderCardList(card_list)
      } else {
        refresh()
      }
    })
  }

  /**
   * 刷新列表
   */
  function refresh() {
    cleanCardList()
    getCardList()
      .then((ret) => {
        card_list = ret
        localforage.setItem(ART_LIST, card_list)
        renderCardList(card_list)
      })
      .catch(alert)
  }

  function getCardList() {
    loading()
    return av
      .read('Note', (q) => {
        q.descending('updatedAt')
        q.select(['title', 'summary', 'content'])
        q.limit(1000)
      })
      .then((ret) => ret.map((i) => i.toJSON()))
      .finally(unloading)
  }

  window.listenLogin = function () {
    el.add_btn.style.display = 'inline'
  }

  window.listenLogout = function () {
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
    el.card_list.innerHTML = list.reduce(
      (p, c) =>
        (p += `
    <div class="card pb-2 pt-2 mb-2">
      <div class="card-body">
        <a class="text-info card-link" href="art-detail.html?id=${c.objectId}">${c.title}</a>
      </div>
    </div>
    `),
      ''
    )
  }
})()
