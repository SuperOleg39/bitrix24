var gulp = require('gulp');
var plumber = require('gulp-plumber');
var imagemin = require('gulp-imagemin');
var path = require('./path');

gulp.task('images:process', function() {
    return gulp.src(path.src.img, { base: 'src' })
        .pipe(plumber())
        .pipe(imagemin())
        .pipe(gulp.dest(path.dist.img));
});