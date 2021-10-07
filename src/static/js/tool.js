'use strict'

!(function () {
  const tools = [
    {
      name: '图片压缩',
      summary: '图片压缩',
      link: 'tool-compress_img.html',
    },
    {
      name: '炫酷头像',
      summary: '黑白隐藏图',
      link: 'tool-cool_avatar.html',
    },
    {
      name: 'gif反转',
      summary: 'gif反转',
      link: 'tool-reverse_gif.html',
    },
    {
      name: '百度网盘搜索',
      summary: '聚合网盘内容搜索',
      link: 'tool-bd_search.html',
    },
    {
      name: 'iOS文件信息',
      summary: 'iOS文件信息',
      link: 'tool-ios_file_information.html',
    },
    {
      name: '刮刮乐',
      summary: '刮刮乐',
      link: 'tool-scratch_card.html',
    },
  ]

  if (!is_electron) {
    tools.push(
      {
        name: '打地鼠',
        summary: '打地鼠',
        link: 'tool-hamster.html',
      },
      {
        name: '拼图',
        summary: '拼图',
        link: 'tool-puzzle.html',
      }
    )
  }

  el.list.innerHTML = tools.reduce(
    (p, c) =>
      (p += `
        <div class="card text-info mt-2">
          <div class="card-body">
            <a class="card-title" href="${c.link}">${c.name}</a>
            <p class="card-text">${c.summary}</p>
          </div>
        </div>
      `),
    ''
  )
})()
