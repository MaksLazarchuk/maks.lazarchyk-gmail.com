const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');

gulp.task('sass', function () {
  return gulp.src('./assets/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task('sass:watch', function () {
  return gulp.watch('./assets/**/*.scss', gulp.series('sass'));
});

gulp.task('imagemin',() => 
  gulp.src('media/*')
      .pipe(imagemin())
      .pipe(gulp.dest('dist/images'))
);