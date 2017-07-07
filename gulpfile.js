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
    gulp.watch(path.src.pug, gulp.series('pug:build', 'server-reload'));
    gulp.watch(path.src.stylus, gulp.series('stylus:build', 'server-reload'));
    gulp.watch(path.src.js, gulp.series('js:copy', 'server-reload'));
    gulp.watch(path.src.img, gulp.series('images:process', 'server-reload'));
    gulp.watch(path.src.fonts, gulp.series('fonts:copy', 'server-reload'));
    gulp.watch(path.src.vendor, gulp.series('vendor:copy', 'server-reload'));
});

gulp.task('default', gulp.series(
    'build',
    gulp.parallel(
        'server',
        'watch'
    )
));