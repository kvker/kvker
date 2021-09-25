/**
 * 格式化数字, 如果小于10则前面补个0
 * @param {number}} time 数值
 */
function formatNumber(number) {
  return number >= 10 ? number : ('0' + number)
}

/**
 * 格式显示时分秒时间, 插件会有时区问题
 * @param {number} second 传入的秒数
 */
function formatTime(second) {
  return `${formatNumber(~~(second / 3600))}:${formatNumber(~~(second / 60) % 60)}:${formatNumber(second % 60)}`
}