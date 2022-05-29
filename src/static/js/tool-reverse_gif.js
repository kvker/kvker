'use strict'

!(function () {
  let canvas = el.canvas,
    ctx = canvas.getContext('2d'),
    result_url = '',
    gif

  window.changeInput = (e) => {
    let file = e.target.files[0]
    if (!file) {
      return
    }
    el.choose_btn.remove()
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = (e) => {
      let src = e.target.result
      createImg(src)
    }
  }

  function createImg(src) {
    let img = el.img
    img.src = src
    img.onload = (e) => {
      img.style.display = 'inline'
      canvas.width = img.width
      canvas.height = img.height

      let rub = new SuperGif({ gif: img })
      let img_list = []

      gif = new GIF({
        workers: 2,
        quality: 10,
        workerScript: 'static/libs/gif.worker.js',
      })

      // rub 挂载gif图片完成
      rub.load((e) => {
        for (let i = 0; i < rub.get_length(); i++) {
          // 遍历gif实例的每一帧
          rub.move_to(i)
          let cur_file = convertCanvasToImage(rub.get_canvas(), 'new' + i)
          img_list.push({
            file_name: cur_file.name,
            url: URL.createObjectURL(cur_file),
            file: cur_file,
          })
        }
        let img_obj_list = []
        let count = 0
        // 反转所有帧
        img_list = img_list.reverse()
        for (let i = 0; i < img_list.length; i++) {
          let tmp_img = new Image()
          img_obj_list.push(tmp_img)
          tmp_img.src = img_list[i].url
          tmp_img.onload = () => {
            count++
            if (count === img_list.length) {
              generateGif(img_obj_list)
            }
          }
        }
      })

      // gif.js renderer完成
      gif.on('finished', (blob) => {
        unloading()
        let file = new FileReader()
        file.readAsDataURL(blob)
        file.onload = () => {
          result_url = file.result
          el.result.src = file.result
          el.result.style.display = 'inline'
        }
      })
    }
  }

  function generateGif(img_obj_list) {
    for (let i = 0; i < img_obj_list.length; i++) {
      ctx.save()
      ctx.drawImage(img_obj_list[i], 0, 0, canvas.width, canvas.height)
      ctx.restore()
      gif.addFrame(canvas, { copy: true, delay: 100 })
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    }

    loading()

    gif.render()
  }

  // 路径转文件
  function dataURLtoFile(dataurl, filename) {
    let arr = dataurl.split(',')
    let mime = arr[0].match(/:(.*?);/)[1]
    let bstr = atob(arr[1])
    let n = bstr.length
    let u8arr = new Uint8Array(n)
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n)
    }
    return new File([u8arr], filename, { type: mime })
  }

  // 将canvas转换成file对象
  function convertCanvasToImage(canvas, filename) {
    return dataURLtoFile(canvas.toDataURL('image/png'), filename)
  }
})()
