'use strict'

!(function () {
  let canvas, ctx, size, imageDataWhite, imageDataBlack
  // 背景色开关
  canvas = el.canvas
  ctx = canvas.getContext('2d')

  window.changeInput = (e, type) => {
    let file = e.target.files[0]
    let reader = new FileReader()
    let img = new Image()
    reader.readAsDataURL(file)
    reader.onload = function (e) {
      img.src = e.target.result
    }
    img.onload = () => {
      let width = img.width
      let height = img.height
      if (width !== height) {
        alert('请上传正方形图片')
        return
      }
      size = Math.min(width, height)
      canvas.width = size
      canvas.height = size
      ctx.clearRect(0, 0, size, size)
      ctx.drawImage(img, 0, 0)
      let imgData = ctx.getImageData(0, 0, size, size)
      let data = imgData.data
      // console.log(data)
      // 黑背景图
      if (type) {
        for (let i = 0; i < data.length; i += 4) {
          let ave = (data[i + 0] + data[i + 1] + data[i + 2]) / 3
          // ave = ave < 130 ? 255 : ave
          data[i + 0] = 255
          data[i + 1] = 255
          data[i + 2] = 255
          data[i + 3] = ave
          if (i % 8 === 4 || ~~(i / (size * 4)) % 2) {
            data[i + 3] = 0
          }
        }
        imageDataBlack = imgData
      } else {
        // 白背景图
        for (let i = 0; i < data.length; i += 4) {
          let ave = (data[i + 0] + data[i + 1] + data[i + 2]) / 3
          data[i + 0] = 0
          data[i + 1] = 0
          data[i + 2] = 0
          data[i + 3] = 255 - ave
          if (!(i % 8) || !(~~(i / (size * 4)) % 2)) {
            data[i + 3] = 0
          }
        }
        imageDataWhite = imgData
      }
      // console.log(data)
      ctx.putImageData(imgData, 0, 0)
    }
  }

  window.doMergeImage = () => {
    let dw = imageDataWhite.data
    let db = imageDataBlack.data
    let length = Math.min(dw.length, db.length)
    for (let i = 0; i < length; i += 4) {
      // 偏黑的网格透明
      if (i % 8 === 4 || ~~(i / (size * 4)) % 2) {
        db[i + 0] = dw[i + 0]
        db[i + 1] = dw[i + 1]
        db[i + 2] = dw[i + 2]
        db[i + 3] = dw[i + 3]
      }
    }
    // console.log(db)
    ctx.putImageData(imageDataBlack, 0, 0)
    el.switch_btn.style.display = 'inline'
    el.download_btn.style.display = 'inline'
  }

  window.switchBG = () => {
    if (el.canvas.style.backgroundColor === 'black') {
      el.canvas.style.backgroundColor = 'white'
    } else {
      el.canvas.style.backgroundColor = 'black'
    }
  }

  window.download = () => {
    let a = document.createElement('a')
    a.href = canvas.toDataURL('image/png')
    a.download = 'cool_avatar.png'
    a.click()
  }
})()
