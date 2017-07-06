var gulp = require('gulp');
var path = require('./path');

gulp.task('vendor:copy', function() {
    return gulp.src(path.src.vendor, { since: gulp.lastRun('vendor:copy') })
        .pipe(gulp.dest(path.dist.vendor))
});