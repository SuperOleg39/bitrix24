var gulp = require('gulp');
var path = require('./path');

gulp.task('fonts:copy', function() {
    return gulp.src(path.src.fonts, { base: 'src', since: gulp.lastRun('fonts:copy') })
        .pipe(gulp.dest(path.dist.fonts))
});