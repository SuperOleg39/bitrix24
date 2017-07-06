var path = {
    src: {
        pug: 'src/**/*.pug',
        stylus: 'src/**/*.styl',
        js: 'src/**/*.js',
        img: 'src/assets/img/*.*',
        fonts: 'src/assets/fonts/*.*',
        vendor: 'vendor/**/*.*'
    },
    dist: {
        html: 'dist/',
        css: 'dist/',
        js: 'dist/',
        img: 'dist/',
        fonts: 'dist/',
        vendor: 'dist/vendor/'
    },
    watch: {
        src: 'src/**/*.*',
        dist: 'dist/**/*.*',
        vendor: 'vendor/**/*.*'
    },
    clean: './dist'
};

module.exports = path;