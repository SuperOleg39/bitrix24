var gulp = require('gulp');
var plumber = require('gulp-plumber');
var stylus = require('gulp-stylus');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var path = require('./path');

gulp.task('stylus:build', function() {
    return gulp.src(path.src.stylus, { base: 'src' })
        .pipe(plumber())
        .pipe(stylus({ url: 'embedurl' }))
        .pipe(postcss([ autoprefixer() ]))
        .pipe(gulp.dest(path.dist.css));
});