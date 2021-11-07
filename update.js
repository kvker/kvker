const fs = require('fs')

const data = fs.readFileSync('src/pwabuilder-sw.js').toString()
const match = data.match(/const CACHE = 'kvker-1-0-(\d+)'/)
let version = match[1]
const text = data.replace(/const CACHE = 'kvker-1-0-(\d+)'/, `const CACHE = 'kvker-1-0-${++version}'`)
fs.writeFileSync('src/pwabuilder-sw.js', text)
console.log('Update version: ' + version)