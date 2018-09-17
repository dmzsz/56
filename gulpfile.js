'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('autoprefixer');
// var cssnext = require('cssnext');
// var precss = require('precss');
var cssnano = require('cssnano');
var postcss = require('gulp-postcss');
var csscomb = require('gulp-csscomb');

gulp.task('default', function() {});

gulp.task('sass', function() {
  var plugins = [
    autoprefixer({ browsers: ['last 5 version'] })
  ];
  return gulp.src('./sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    // .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(postcss(plugins))
    .pipe(csscomb())
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function() {
  gulp.watch('./sass/**/*.scss', ['sass']);
});