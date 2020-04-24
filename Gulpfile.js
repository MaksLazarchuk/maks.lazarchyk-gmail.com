const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');

gulp.task('sass', function () {
  return gulp.src('./src/assets/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public'));
});

gulp.task('sass:watch', function () {
  return gulp.watch('./src/assets/**/*.scss', gulp.series('sass'));
});

gulp.task('imagemin',() => 
  gulp.src('./src/assets/media/*')
      .pipe(imagemin())
      .pipe(gulp.dest('./public/images'))
);

gulp.task('scripts', function () {
  return gulp.src('./src/main.js')
    .pipe(gulp.dest('./public'));
});