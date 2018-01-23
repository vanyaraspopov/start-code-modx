'use strict';

var gulp = require('gulp');

var paths = {
    dist: {
        //  output
        base: 'assets/web/',
        html: 'assets/web/',
        js: 'assets/web/js/',
        css: 'assets/web/css/',
        img: 'assets/web/img/',
        fonts: 'assets/web/fonts/',
        modx: 'core/elements/web/'
    },
    src: {
        //  sources
        base: 'assets/dev/',
        html: 'assets/dev/*.html',
        js: 'assets/dev/js/**/*.js',
        style: 'assets/dev/sass/style.scss',
        img: 'assets/dev/img/**/*.*',
        fonts: 'assets/dev/fonts/**/*.*',
        modx: 'core/elements/dev/**/*.*'
    },
    watch: {
        //  files watch to
        base: 'assets/dev/',
        html: 'assets/dev/**/*.html',
        js: 'assets/dev/js/**/*.js',
        style: 'assets/dev/sass/**/*.scss',
        img: 'assets/dev/img/**/*.*',
        fonts: 'assets/dev/fonts/**/*.*',
        modx: 'core/elements/dev/**/*.*'
    }
};

gulp.task('modx:build', function () {
    return gulp.src(paths.src.modx)
        .pipe(gulp.dest(paths.dist.modx))
});