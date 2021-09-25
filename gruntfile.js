module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner:
          '/*! <%= pkg.description %> <%= pkg.author %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
      },
      build: {
        expand: true,
        cwd: 'src',
        src: 'js/*.js',
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
        src: 'css/*.css',
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
      build: {
        expand: true,
        cwd: 'src',
        src: 'lib/**/*',
        dest: 'dist/',
      },
      favicon: {
        expand: true,
        cwd: 'src',
        src: 'favicon.ico',
        dest: 'dist/',
      },
    },
  })
  // 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-htmlmin')
  grunt.loadNpmTasks('grunt-contrib-cssmin')
  grunt.loadNpmTasks('grunt-contrib-copy')

  // 默认被执行的任务列表。
  grunt.registerTask('default', ['uglify', 'cssmin', 'htmlmin', 'copy'])
}