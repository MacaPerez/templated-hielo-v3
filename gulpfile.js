

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');

// Minify JS

gulp.task('minify', function() {
  console.log('minifying js ...');

  return gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('assets/js/'));
});

// Minify CSS

gulp.task('mincss', () => {
  return gulp.src('src/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('assets/css/'));
});
