const gulp = require('gulp');
const argv = require('yargs').argv;
const browserSync = require('browser-sync').create();

const server = (argv.server ? argv.server : 'http://localhost:3000');

gulp.task('proxy', function() {
    browserSync.init({
        proxy: server,
        reloadOnRestart: true
    });
});