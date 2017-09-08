var gulp = require('gulp');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var pump = require('pump');
var uglify = require('gulp-uglify');
var shell = require('gulp-shell');

/*
    Add Directories to watch here
    and Set Task
*/
gulp.task('watch', ['sass'], function() {
    gulp.watch(paths.sass, ['sass']);
});

gulp.task('default', ['sass']);

/*
    Compiled and Minify SCSS SASS to CSS
*/
var paths = {
    sass: ['./scss/*.scss']
};

gulp.task('sass', function(done) {
    gulp.src('./scss/main.scss')
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(gulp.dest('./css/'))
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest('./css/'))
        .on('end', done);
});

/*
    Compiled and Minify JS Files
*/
gulp.task('compress', function(cb) {
    pump([gulp.src(['js/*.js', 'template/**/*.js']),
        uglify(),
        gulp.dest('production-dist')
    ]);
});

/*
    Execute any bash command using gulp here
    through gulp-shell
*/
gulp.task('serve', shell.task([
    'node server.js'
]));