// 解决Safari返回页面缓存问题
let browser_rule = /^.*((iPhone)|(iPad)|(Safari))+.*$/;
if(browser_rule.test(navigator.userAgent)) {
  window.onpageshow = function(event) {
    if(event.persisted) {
      window.location.reload()
    }
  }
}

function goHomepage() {
  location.href = "/huawei_quick/pixivim/"
}

function startLoading() {
  document.body.style.opacity = '0.5'
}

function endLoading() {
  document.body.style.opacity = '1'
}

function isLoading() {
  return document.body.style.opacity === '0.5'
}

function img2Base64(img, ext) {
  let canvas = document.createElement("canvas")
  canvas.width = img.width
  canvas.height = img.height
  let ctx = canvas.getContext("2d")
  ctx.drawImage(img, 0, 0, img.width, img.height)
  return canvas.toDataURL("image/" + ext)
}

function formatDate(date) {
  date = new Date(date)
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
}