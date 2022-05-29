---
layout: note
title: 基础静态gruntfile.js配置
excerpt: Read more...
date: 2022-5-29 14:17:11
updated: 2022-5-29 14:17:11
comments: false
lang: zh-CN
---

devDependencies

```json
{
  "devDependencies": {
    "@babel/core": "^7.14.2",
    "@babel/preset-env": "^7.14.2",
    "express": "^4.17.1",
    "grunt": "^1.4.0",
    "grunt-babel": "^8.0.0",
    "grunt-cli": "^1.4.2",
    "grunt-contrib-copy": "^1.0.0",
    "grunt-contrib-cssmin": "^4.0.0",
    "grunt-contrib-htmlmin": "^3.1.0",
    "grunt-contrib-jshint": "^3.0.0",
    "grunt-contrib-nodeunit": "^3.0.0",
    "grunt-contrib-uglify": "^5.0.1",
    "http-proxy-middleware": "^2.0.0"
  }
}
```

gruntfile.js

```js
module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    babel: {
      options: {
        presets: ['@babel/preset-env']
      },
      build: {
        expand: true,
        cwd: 'src',
        src: 'js/**/*.js',
        dest: 'babel/',
      }
    },
    uglify: {
      options: {
        banner:
          '/*! <%= pkg.description %> <%= pkg.author %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
      },
      build: {
        expand: true,
        cwd: 'babel',
        src: 'js/**/*.js',
        dest: 'dist/',
      },
    },
    cssmin: {
      options: {
        banner:
          '/*! <%= pkg.description %> <%= pkg.author %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
      },
      build: {
        expand: true,
        cwd: 'src',
        src: 'css/**/*.css',
        dest: 'dist/',
      },
    },
    htmlmin: {
      options: {
        banner:
          '/*! <%= pkg.description %> <%= pkg.author %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        minifyJS: true,
        minifyCSS: true,
      },
      build: {
        expand: true,
        cwd: 'src',
        src: '**/*.html',
        dest: 'dist/',
      },
    },
    copy: {
      lib: {
        expand: true,
        cwd: 'src',
        src: 'lib/**/*',
        dest: 'dist/',
      },
      icon: {
        expand: true,
        cwd: 'src',
        src: 'icon/**/*',
        dest: 'dist/',
      },
      img: {
        expand: true,
        cwd: 'src',
        src: 'img/**/*',
        dest: 'dist/',
      },
    },
  })
  // 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks('grunt-babel')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-htmlmin')
  grunt.loadNpmTasks('grunt-contrib-cssmin')
  grunt.loadNpmTasks('grunt-contrib-copy')

  // 默认被执行的任务列表。
  grunt.registerTask('default', ['babel', 'uglify', 'cssmin', 'htmlmin', 'copy'])
}
```
  