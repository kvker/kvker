'use strict'

!(function () {
  const ART_LIST = 'art_list'
  let renderer_MD = new marked.Renderer()
  marked.setOptions({
    renderer: renderer_MD,
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
  })

  let id = searchParams.get('id')
  el.edit_btn.addEventListener('click', () => (location.href = `art-edit.html?id=${id}`))
  el.delete_btn.addEventListener('click', clickDelete)
  if (userinfo) {
    el.ctrls_box.style.display = 'block'
  }

  localforage.getItem(ART_LIST).then(function (local_list) {
    if (local_list) {
      let item = local_list.find((i) => i.objectId === id)
      let markdown_string = item.content
      marked.setOptions({
        highlight(code) {
          return hljs.highlightAuto(code).value
        },
      })

      el.title.innerText = item.title
      el.h3.insertAdjacentHTML('afterend', marked(markdown_string))
    } else {
      alert('无文章，请重试')
    }
  })

  window.listenLogin = function () {
    el.ctrls_box.style.display = 'block'
  }

  window.listenLogout = function () {
    el.ctrls_box.style.display = 'none'
  }

  function clickDelete() {
    if (confirm('确定删除吗?') && user) {
      av.delete('Note', id).then((ret) => {
        alert('删除成功')
        location.replace('index.html')
      })
    }
  }
})()
