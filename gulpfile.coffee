gulp = require 'gulp'
sass = require 'gulp-sass'
browserify = require 'browserify'
source = require 'vinyl-source-stream'
reactify = require 'reactify'
_ = require 'lodash'

customOpts =
  entries: ['./src/js/main.js'],
  transform: [reactify]

gulp.task 'build', ->
  b = browserify customOpts
  b.bundle().pipe(source('app.js')).pipe(gulp.dest('./lib'))

  gulp.src('./src/css/**/*.scss')
  .pipe(sass.sync().on('error', sass.logError))
  .pipe(gulp.dest('./lib'));

gulp.task 'watch', ->
  gulp.watch ['src/**/*'], ['build']
