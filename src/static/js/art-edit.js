document.addEventListener('dragover', (e) => {
  e.preventDefault()
})

document.addEventListener('drop', (e) => {
  e.preventDefault()
})

el.complete_btn.addEventListener('click', clickComplete)
id = searchParams.get('id')
if (id) {
  loading()
  av.read('Note', (q) => {
    q.equalTo('objectId', id)
  })
    .then((ret) => {
      let item = ret[0]
      el.title.value = item.get('title')
      el.content.value = item.get('content')
    })
    .catch((error) => {
      console.error(error)
      alert(error.message)
    })
    .finally(unloading)
}

function listenLogin() {
  el.complete_btn.style.display = 'inline'
}

function listenLogout() {
  el.complete_btn.style.display = 'none'
}

function clickComplete() {
  document.body.style.opacity = 0.5
  if (user) {
    loading()
    if (id) {
      av.update('Note', id, {
        title: el.title.value,
        content: el.content.value,
      })
        .then((ret) => {
          alert('更新成功')
          location.replace('/')
        })
        .finally(unloading)
    } else {
      av.create('Note', {
        title: el.title.value,
        content: el.content.value,
      })
        .then(() => {
          alert('创建成功')
          location.replace('index.html')
        })
        .finally(unloading)
    }
  } else {
    alert('未登录')
  }
}

function dropTextarea(e) {
  let files = e.dataTransfer.files
  let file = files[0]
  let file_reader = new FileReader()

  file_reader.readAsDataURL(file)
  file_reader.onload = () => {
    av.upload(file_reader.result).then((ret) => {
      insert2Textarea(e.target, `[img](${ret.get('url')})`)
    })
  }
}

function keydownTextarea(e) {
  let key_code = e.keyCode
  if (key_code === 9) {
    e.preventDefault()
    insert2Textarea(e.target, '  ')
  }
}

function insert2Textarea(textarea, str) {
  let selection_start = textarea.selectionStart
  let value = textarea.value
  value = value.slice(0, selection_start) + str + value.slice(selection_start)
  textarea.value = value
  textarea.selectionStart = textarea.selectionEnd = selection_start + str.length
}

function pasteTextarea(e) {
  let items = e.clipboardData.items
  for (let i = 0; i < items.length; i++) {
    let item = items[i]
    if (item.type.includes('image')) {
      document.body.style.opacity = 0.5
      e.preventDefault()
      let item = items[i]
      let file = item.getAsFile()
      let file_reader = new FileReader()

      file_reader.readAsDataURL(file)
      file_reader.onload = () => {
        av.upload(file_reader.result)
          .then((ret) => {
            insert2Textarea(e.target, `[img](${ret.get('url')})`)
          })
          .finally((_) => {
            document.body.style.opacity = 1
          })
      }
    }
  }
}