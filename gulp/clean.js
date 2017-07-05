var gulp = require('gulp');
var del = require('del');
var path = require('./path');

gulp.task('clean', function() {
    return del(path.clean);
});