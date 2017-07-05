var path = {
    src: {
        pug: 'src/**/*.pug',
        stylus: 'src/**/*.styl',
        img: 'src/assets/img/*.*',
        fonts: 'src/assets/fonts/*.*'
    },
    dist: {
        html: 'dist/',
        css: 'dist/',
        img: 'dist/',
        fonts: 'dist/'
    },
    watch: {
        src: 'src/**/*.*',
        dist: 'dist/**/*.*'
    },
    clean: './dist'
};

module.exports = path;