---
layout: note
title: gulp初次尝试适用普通项目gulpfile
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

```js
const { src, parallel, dest, watch } = require('gulp')
const htmlmin = require('gulp-htmlmin')
const uglify = require('gulp-uglify')
const cleanCss = require('gulp-clean-css')
const rename = require('gulp-rename')

function html() {
  return src('src/*.html')
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        minifyJS: true,
        minifyCSS: true,
      })
    )
    .pipe(dest('dist/'))
}

function css() {
  return src('src/css/*.css')
    .pipe(cleanCss())
    .pipe(
      rename(function (path) {
        if (path.basename.includes('.min')) {
          return
        }
        // Returns a completely new object, make sure you return all keys needed!
        return {
          dirname: path.dirname,
          basename: path.basename,
          extname: '.min.css',
        }
      })
    )
    .pipe(dest('dist/css/'))
}

function js() {
  return src('src/js/*.js').pipe(uglify()).pipe(dest('dist/js/'))
}

function lib() {
  return src('src/lib/*').pipe(dest('dist/lib/'))
}

exports.default = parallel(html, css, js, lib)

watch(['src/*', 'gulpfile.js'], parallel(html, css, js))
```
  