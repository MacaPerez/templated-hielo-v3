// Dependencias

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');
var cleanCSS = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');


// Minify JS

gulp.task('minjs', function() {
  console.log('minifying js');

  return gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('assets/js/'));
});

// Minify CSS

gulp.task('mincss', () => {
  console.log('minifying css');

  return gulp.src('src/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('assets/css/'));
});

// imagemin

gulp.task('imgmin', () => {
  console.log('Minify PNG, JPEG, GIF and SVG images');

  return gulp.src('src/images/*')
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({
          plugins: [
              {removeViewBox: true},
              {cleanupIDs: false}
          ]
      })

    ]))
    .pipe(gulp.dest('images'))
});

gulp.task('watch', function() {
    gulp.watch('src/js/*.js', ['minjs']);
    gulp.watch('src/css/*.css', ['mincss']);
    gulp.watch('src/images/*.{jpg,jpeg,png,gif}', ['imgmin']);
});
