new (class Page extends Base {
  constructor() {
    super()
    this.tools = [
      {
        name: '百度网盘搜索',
        summary: '聚合网盘内容搜索',
        link: 'tool/bd_search.html',
      },
      {
        name: '阿里试用排行',
        summary: '阿里试用排行',
        link: 'tool/ali_try.html',
      },
      ,
      {
        name: '图片压缩',
        summary: '图片压缩',
        link: 'tool/compress_img.html',
      },
      ,
      {
        name: '炫酷头像',
        summary: '黑白隐藏图',
        link: 'tool/cool_avatar.html',
      },
      ,
      {
        name: 'gif反转',
        summary: 'gif反转',
        link: 'tool/reverse_gif.html',
      },
      {
        name: 'Fetch简介',
        summary: '文档',
        link: 'doc/fetch.html',
      },
      {
        name: 'Rollup中文文档',
        summary: 'Rollup中文文档',
        link: 'https://www.rollupjs.com/guide/introduction/#%E6%A6%82%E8%BF%B0overview',
      },
      {
        name: 'markdowner',
        summary: '极简markdown编辑器',
        link: 'tool/markdowner/',
      },
      {
        name: '自由钢琴',
        summary: '自由钢琴',
        link: 'huawei_quick/autopiano/',
      },
      {
        name: '神的工具箱',
        summary: '神的工具箱',
        link: 'huawei_quick/god_tools/',
      },
      {
        name: '垃圾分类',
        summary: '垃圾分类',
        link: 'huawei_quick/rubbish_category/',
      },
      {
        name: '计时器',
        summary: '计时器',
        link: 'huawei_quick/timer/',
      },
      {
        name: 'iOS文件信息',
        summary: 'iOS文件信息',
        link: 'tool/ios_file_information.html',
      },
      {
        name: '刮刮乐',
        summary: '刮刮乐',
        link: 'tool/scratch_card.html',
      },
      {
        name: '打地鼠',
        summary: '打地鼠',
        link: 'tool/hamster.html',
      },
      {
        name: '拼图',
        summary: '拼图',
        link: 'tool/puzzle.html',
      },
    ]
    this.renderList(this.tools)
  }

  renderList(list) {
    let html = list.reduce((p, c) => {
      p += `
      <a class="card" href="${c.link}">
        <h2 class="card-title">${c.name}</h2>
        <p class="card-summary">${c.summary}</p>
      </a>
    `
      return p
    }, '')
    this.update({
      list: {
        html,
      },
    })
  }
})()