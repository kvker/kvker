'use strict'

!(function () {
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
  el.edit_btn.addEventListener('click', () => (location.href = `edit.html?id=${id}`))
  el.delete_btn.addEventListener('click', clickDelete)
  if (userinfo) {
    el.ctrls_box.style.display = 'block'
  }
  loading()
  av.read('Note', (q) => {
    q.equalTo('objectId', id)
  })
    .then((ret) => {
      let item = ret[0]
      let markdown_string = item.get('content')
      marked.setOptions({
        highlight(code) {
          return hljs.highlightAuto(code).value
        },
      })

      el.title.innerText = item.get('title')
      el.markdown.innerHTML = marked(markdown_string)
    })
    .catch((error) => {
      console.error(error)
      alert(error.message)
    })
    .finally(unloading)

  function listenLogin() {
    el.ctrls_box.style.display = 'block'
  }

  function listenLogout() {
    el.ctrls_box.style.display = 'none'
  }

  function clickDelete() {
    if (confirm('确定删除吗?') && user) {
      av.delete('Note', id).then((ret) => {
        alert('删除成功')
        location.replace('/')
      })
    }
  }
})()
