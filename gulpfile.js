
var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('minify', function() {
  console.log('minifying js ...');

  return gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('assets/js/'));
});
