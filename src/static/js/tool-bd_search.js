let pans = [
  {
    name: '罗马盘',
    link: 'https://www.luomapan.com',
  },
  {
    name: '大圣盘',
    link: 'https://www.dashengpan.com',
  },
  {
    name: '56网盘',
    link: 'https://www.56wangpan.com',
  },
  {
    name: '小白盘',
    link: 'https://www.xiaobaipan.com',
  },
  {
    name: '文件搜',
    link: 'http://wjsou.com/',
  },
  {
    name: '盘搜搜',
    link: 'https://www.pansoso.com/',
  },
  {
    name: '小可搜搜',
    link: 'https://www.xiaokesoso.com/',
  },
  {
    name: '小昭来啦',
    link: 'https://www.xiaozhaolaila.com/',
  },
  {
    name: 'SOSO云盘',
    link: 'https://www.sosoyunpan.com/',
  },
  {
    name: 'SO百度',
    link: 'https://www.sobaidupan.com/',
  },
  {
    name: '凌风云搜索',
    link: 'https://www.lingfengyun.com/',
  },
  {
    name: '去转盘',
    link: 'https://www.quzhuanpan.com/',
  },
  {
    name: '小不点搜索',
    link: 'https://www.xiaoso.net/',
  },
  {
    name: 'pan58搜索',
    link: 'https://www.pan58.com/',
  },
]
document.querySelector('#nav').innerHTML = pans.reduce((p, c, idx) => p += `<button id="button${idx}" class="btn" onclick="switchPan(${idx})">${c.name}</button>`, '')
document.querySelector('#iframe').src = pans[0].link
document.querySelector('#button0').classList.add('selected')

function switchPan(idx) {
  console.log(idx)
  document.querySelectorAll('button').forEach((button) => button.classList.remove('selected'))
  document.querySelector('#iframe').src = pans[idx].link
  document.querySelector('#button' + idx).classList.add('selected')
}