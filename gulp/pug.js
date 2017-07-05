var gulp = require('gulp');
var plumber = require('gulp-plumber');
var pug = require('gulp-pug');
var path = require('./path');

gulp.task('pug:build', function() {
    return gulp.src(path.src.pug, { base: 'src' })
        .pipe(plumber())
        .pipe(pug({ pretty: true }))
        .pipe(gulp.dest(path.dist.html));
});