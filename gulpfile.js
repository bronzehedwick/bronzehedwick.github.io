var gulp = require('gulp');
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

// Minify images
gulp.task('minify-images', function() {
  'use strict';

  return gulp.src('images/*')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}]
    }))
    .pipe(gulp.dest('images'));
});

// Default task
gulp.task('default', ['minify-css', 'minify-images']);
