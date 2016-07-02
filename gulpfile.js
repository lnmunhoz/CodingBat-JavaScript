require('babel-core/register');

var gulp = require('gulp');
var mocha = require('gulp-mocha');
var gutil = require('gulp-util');

gulp.task('default', function() {
  gulp.watch(['problems/**'], ['mocha']);
});

gulp.task('mocha', function() {
  return gulp.src(['problems/*.test.js'], { read: false })
    .pipe(mocha({ reporter: 'nyan' }))
});
