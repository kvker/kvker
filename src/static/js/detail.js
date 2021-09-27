let renderer_MD = new marked.Renderer()
    marked.setOptions({
      renderer: renderer_MD,
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false
    })

    const app = new class extends Base {
      constructor() {
        super()
        this.id = this.query_params.id
        this.queryID('edit_btn').addEventListener('click', _ => location.href = `edit.html?id=${this.id}`)
        this.queryID('delete_btn').addEventListener('click', this.clickDelete.bind(this))
        if(this.userinfo) {
          this.el.ctrls_box.style.display = 'block'
        }
        this.loading()
        av.read('Note', q => {
          q.equalTo('objectId', this.id)
        }).then(ret => {
          let item = ret[0]
          let markdown_string = item.get('content')
          marked.setOptions({
            highlight(code) {
              return hljs.highlightAuto(code).value
            }
          })

          this.update({
            title: item.get('title'),
            markdown: {
              html: marked(markdown_string)
            }
          })
        }).catch(error => {
          console.error(error)
          alert(error.message)
        }).finally(this.unloading)
      }

      listenLogin() {
        this.el.ctrls_box.style.display = 'block'
      }

      listenLogout() {
        this.el.ctrls_box.style.display = 'none'
      }

      clickDelete() {
        if(confirm('确定删除吗?') && this.user) {
          av.delete('Note', this.id).then(ret => {
            alert('删除成功')
            location.replace('/')
          })
        }
      }
    }