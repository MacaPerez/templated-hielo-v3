
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('minify', function() {
  console.log('minifying js ...');

  return gulp.src('src/assets/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/assets/js/'));
});
