const gulp = require('gulp');
const sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('./assets/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});
 
gulp.task('sass:watch', function () {
    return gulp.watch('./assets/**/*.scss',gulp.series('sass'));
});