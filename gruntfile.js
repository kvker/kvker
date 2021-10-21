const https = require('https')

let lc_data = []
const LCData = function () {
  return new Promise((resolve, reject) => {
    let str = ''
    const req = https.request(
      {
        hostname: 'lcapi.kvker.com',
        headers: {
          'X-LC-Id': 'vdTAziqW4rPfnhY0yqR8wXIv-9Nh9j0Va',
          'X-LC-Session': '2yprtzld7pa0rw3uv53pkb32l',
          'X-LC-Sign': '750051981329278f9d57b1b90643ebcd,1634627434770',
        },
        path: '/1.1/classes/Note?where=%7B%7D&keys=title%2Csummary%2Ccontent&limit=1000&order=-updatedAt',
        method: 'GET',
      },
      (res) => {
        // console.log('statusCode:', res.statusCode)
        // console.log('headers:', res.headers)

        res.on('data', (data) => {
          // console.log(data.length)
          str += data
        })

        res.on('end', () => {
          lc_data = JSON.parse(str)
          // console.log(lc_data.results.length)
          resolve()
        })
      }
    )

    req.on('error', (e) => {
      console.error(e)
      reject(e)
    })

    req.end()
  })
}

module.exports = function (grunt) {
  // 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks('grunt-ejs')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-htmlmin')
  grunt.loadNpmTasks('grunt-contrib-cssmin')
  grunt.loadNpmTasks('grunt-contrib-copy')

  // 默认被执行的任务列表。
  grunt.registerTask('default', ['uglify', 'ejs', 'cssmin', 'htmlmin', 'copy'])

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      files: ['src/ejs/**/*.ejs'],
      tasks: ['ejs'],
    },
    ejs: {
      options: {
        banner: '/*! <%= pkg.description %> <%= pkg.author %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
      },
      build: {
        expand: true,
        cwd: 'src/ejs',
        src: ['**/*.ejs', '!common/**/*.ejs'],
        dest: 'src/',
        ext: '.html',
      },
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.description %> <%= pkg.author %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
      },
      build: {
        expand: true,
        cwd: 'src/static',
        src: 'js/*.js',
        dest: 'dist/static/',
      },
    },
    cssmin: {
      options: {
        banner: '/*! <%= pkg.description %> <%= pkg.author %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
      },
      build: {
        expand: true,
        cwd: 'src/static',
        src: 'css/*.css',
        dest: 'dist/static/',
      },
    },
    copy: {
      build: {
        expand: true,
        cwd: 'src',
        src: ['static/libs/**/*', 'static/img/**/*', 'images/**/*', 'favicon.ico', 'manifest.json', 'pwabuilder-sw.js'],
        dest: 'dist/',
      },
    },
    htmlmin: {
      options: {
        banner: '/*! <%= pkg.description %> <%= pkg.author %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
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
  })
}
