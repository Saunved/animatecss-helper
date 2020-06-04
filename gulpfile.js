/*jshint -W104*/
const gulp = require('gulp');
const minify = require('gulp-minify');
const strip = require('gulp-strip-comments');
const rename = require('gulp-rename');

function buildTask(cb){
    gulp.src('src/**/*.js')
    .pipe(minify({noSource: true}))
    .pipe(strip())
    .pipe(rename('animatecss-helper.min.js'))
    .pipe(gulp.dest('dist'));

    cb();
}

exports.default = gulp.series(buildTask);
