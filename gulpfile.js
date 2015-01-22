var gulp = require('gulp');
var sprite = require('css-sprite');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');

// Minify CSS
gulp.task('minify-css', function() {
  'use strict';

  gulp.src('./css/*.css')
    .pipe(minifyCSS())
    .pipe(concat('styles.min.css'))
    .pipe(gulp.dest('./css/build/'));
});

// Default task
gulp.task('default', ['minify-css']);
