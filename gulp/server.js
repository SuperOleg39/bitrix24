var gulp = require('gulp');
var browserSync = require('browser-sync').create();
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
    browserSync.init(config);

    // gulp.watch(path.watch.dist).on('change', browserSync.reload);
});

gulp.task('server-reload', function(done) {
    browserSync.reload();
    done();
});
