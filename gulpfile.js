var gulp = require('gulp');
var requireDir = require('require-dir');
var path = require('./gulp/path');

requireDir('./gulp', {
    recurse: true
});

gulp.task('build', gulp.series(
    'clean',
    gulp.parallel(
        'pug:build',
        'stylus:build',
        'js:copy',
        'images:process',
        'fonts:copy',
        'vendor:copy'
    )
));

gulp.task('watch', function() {
    gulp.watch(path.src.pug, gulp.series('pug:build'));
    gulp.watch(path.src.stylus, gulp.series('stylus:build'));
    gulp.watch(path.src.js, gulp.series('js:copy'));
    gulp.watch(path.src.img, gulp.series('images:process'));
    gulp.watch(path.src.fonts, gulp.series('fonts:copy'));
    gulp.watch(path.src.vendor, gulp.series('vendor:copy'));
});

gulp.task('default', gulp.series(
    'build',
    gulp.parallel(
        'server',
        'watch'
    )
));