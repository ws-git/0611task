var gulp = require('gulp');
var sass = require('gulp-sass'); //压缩scss
var cleancss = require('gulp-clean-css'); //压缩css
var htmlmin = require('gulp-htmlmin'); //压缩html
var webserver = require('gulp-webserver'); //起服务
var uglify = require('gulp-uglify'); //压缩js
var auto = require('gulp-autoprefixer');

gulp.task('sass', function() {
    gulp.src('src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('src/css'))
});

gulp.task('uglify', function() {
    gulp.src('src/js/pack/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('rev/js'))
});

gulp.task('server', function() {
    gulp.src('src')
        .pipe(webserver({
            port: 9090,
            host: '',
            open: true,
            forwork: 'index.html'

        }))
})