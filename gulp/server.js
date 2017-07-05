var gulp = require('gulp');
var browserSync = require('browser-sync');
var path = require('./path');

var config = {
    server: {
        baseDir: path.clean
    },
    tunnel: false,
    host: 'localhost',
    port: 8888
};

gulp.task('server', function() {
    browserSync(config);

    browserSync.watch(path.watch.dist)
        .on('change', browserSync.reload);
});