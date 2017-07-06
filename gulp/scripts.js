var gulp = require('gulp');
var path = require('./path');

gulp.task('js:copy', function() {
    return gulp.src(path.src.js, { base: 'src' })
        .pipe(gulp.dest(path.dist.js))
});