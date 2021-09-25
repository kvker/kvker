const app = new (class extends Base {
  constructor() {
    super()
    this.ART_LIST = 'art_list'
    this.card_list = []
    this.queryID('search_input').addEventListener(
      'keypress',
      this.inputKeypress.bind(this)
    )
    this.queryID('search_btn').addEventListener('click', this.search.bind(this))
    this.queryID('refresh_btn').addEventListener(
      'click',
      this.refresh.bind(this)
    )
    this.queryID('add_btn').addEventListener(
      'click',
      this.clickAddArticle.bind(this)
    )
    this.getList()
    if (this.user) {
      this.queryID('add_btn').style.display = 'inline'
    }
  }
  /**
   * 获取列表
   */
  async getList() {
    let local_list = JSON.parse(localStorage.getItem(this.ART_LIST))
    if (local_list) {
      this.card_list = local_list
      this.renderCardList(this.card_list)
    } else {
      await this.refresh()
    }
  }
  /**
   * 刷新列表
   */
  async refresh() {
    this.cleanCardList()
    this.card_list = await this.getCardList()
    localStorage.setItem(this.ART_LIST, JSON.stringify(this.card_list))
    this.renderCardList(this.card_list)
  }
  async getCardList() {
    try {
      let ret = await av.read('Note', (q) => {
        q.descending('updatedAt')
        q.select(['title', 'summary', 'content'])
        q.limit(1000)
      })
      if (ret) {
        return ret.map((i) => i.toJSON())
      }
    } catch (error) {
      return []
    }
  }
  listenLogin() {
    this.el.add_btn.style.display = 'inline'
  }
  listenLogout() {
    this.el.add_btn.style.display = 'none'
  }
  clickAddArticle() {
    location.href = `/art/edit.html`
  }
  inputKeypress(e) {
    let code = e.keyCode
    if (code === 13) {
      this.search()
    }
  }
  search() {
    let val = this.query('#search_input').value
    let list = this.card_list
    if (val) {
      list = this.card_list.filter(
        (i) =>
          i.title.includes(val) ||
          (i.summary || '').includes(val) ||
          i.content.includes(val)
      )
    }
    if (list.length) {
      this.renderCardList(list)
    } else {
      open(`https://www.baidu.com/s?ie=utf-8&wd=${val}`)
    }
  }
  cleanCardList() {
    this.query('#card_list').innerHTML = ''
  }
  renderCardList(list) {
    let html = ''
    list.forEach((i) => {
      html += `
  <a class="link" href="/art/detail.html?id=${i.objectId}">${i.title}</a>
  `
    })
    this.update(
      {
        card_list: {
          html,
        },
      },
      'replace'
    )
  }
})()
