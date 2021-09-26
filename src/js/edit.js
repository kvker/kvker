const app = new class extends Base {
  constructor() {
    super()
    document.addEventListener('dragover', e => {
      e.preventDefault()
    })
    document.addEventListener('drop', e => {
      e.preventDefault()
    })
    this.el.complete_btn.addEventListener('click', this.clickComplete.bind(this))
    this.id = this.query_params.id
    if(this.id) {
      av.read('Note', q => {
        q.equalTo('objectId', this.id)
      }).then(ret => {
        let item = ret[0]
        this.update({
          title: item.get('title'),
          content: item.get('content')
        })
      }).catch(error => {
        console.error(error)
        alert(error.message)
      })
    }
  }

  listenLogin() {
    this.el.complete_btn.style.display = 'inline'
  }

  listenLogout() {
    this.el.complete_btn.style.display = 'none'
  }

  clickComplete() {
    // console.log(this)
    document.body.style.opacity = 0.5
    if(this.user) {
      if(this.id) {
        av.update('Note', this.id, {
          title: this.el.title.value,
          content: this.el.content.value,
        }).then(ret => {
          alert('更新成功')
          location.replace('/')
        })
      } else {
        av.create('Note', {
          title: this.el.title.value,
          content: this.el.content.value,
        }).then(ret => {
          alert('创建成功')
          location.replace('/')
        })
      }
    } else {
      alert('未登录')
    }
    document.body.style.opacity = 1
  }

  dropTextarea(e) {
    let files = e.dataTransfer.files
    let file = files[0]
    let file_reader = new FileReader()

    file_reader.readAsDataURL(file)
    file_reader.onload = () => {
      av.upload(file_reader.result).then(ret => {
        this.insert2Textarea(e.target, `[img](${ret.get('url')})`)
      })
    }
  }

  keydownTextarea(e) {
    let key_code = e.keyCode
    if(key_code === 9) {
      e.preventDefault()
      this.insert2Textarea(e.target, '  ')
    }
  }

  insert2Textarea(textarea, str) {
    let selection_start = textarea.selectionStart
    let value = textarea.value
    value = value.slice(0, selection_start) + str + value.slice(selection_start)
    textarea.value = value
    textarea.selectionStart = textarea.selectionEnd = selection_start + str.length
  }

  pasteTextarea(e) {
    let items = e.clipboardData.items
    for(let i = 0; i < items.length; i++) {
      let item = items[i]
      if(item.type.includes("image")) {
        document.body.style.opacity = 0.5
        e.preventDefault()
        let item = items[i]
        let file = item.getAsFile()
        let file_reader = new FileReader()

        file_reader.readAsDataURL(file)
        file_reader.onload = () => {
          av.upload(file_reader.result).then(ret => {
            this.insert2Textarea(e.target, `[img](${ret.get('url')})`)
          }).finally(_ => {
            document.body.style.opacity = 1
          })
        }
      }
    }
  }
}