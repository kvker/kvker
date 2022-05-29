const env = process.env
const is_pwa = env.npm_lifecycle_script.includes('--pwa')

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
        is_pwa,
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
