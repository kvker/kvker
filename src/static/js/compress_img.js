let result_url
      const page = new (class Page extends Base {
        constructor() {
          super()
        }

        get result_url() {
          return result_url
        }

        set result_url(val) {
          this.update({
            img: {
              src: val,
            },
          })
          result_url = val
        }

        changeInput(e) {
          this.el.download.style.display = 'none'
          // 压缩图片需要的一些元素和对象
          let reader = new FileReader()
          //创建一个img对象
          let img = new Image()
          // 缩放图片需要的canvas
          let canvas = document.createElement('canvas')
          let ctx = canvas.getContext('2d')

          // 选择的文件对象
          let file = e.target.files[0]
          console.log(file.size)
          reader.readAsDataURL(file)
          // 文件base64化，以便获知图片原始尺寸
          reader.onload = (e) => {
            img.src = e.target.result
          }

          // base64地址图片加载完毕后
          img.onload = (_) => {
            let width = img.width
            let height = img.height
            if (width > 1200) {
              height = (height * 1200) / width
              width = 1200
            }
            canvas.width = width
            canvas.height = height
            ctx.clearRect(0, 0, width, height)
            ctx.drawImage(img, 0, 0, width, height)
            this.result_url = canvas.toDataURL('image/jpeg', 0.92)
            // console.log(this.result_url.length * 0.75)
            this.el.download.style.display = 'block'
            this.update({
              download: {
                href: this.result_url,
                download: '图片',
              },
            })
          }
        }
      })()