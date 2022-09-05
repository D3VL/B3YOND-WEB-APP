"use strict";

const gulp = require('gulp'),
    sass = require('gulp-sass')(require('sass')),
    del = require('del'),
    cleanCSS = require('gulp-clean-css'),
    rename = require("gulp-rename"),
    webpack = require('webpack-stream'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create();

// delete the dist folder
gulp.task('clean', function () {
    return del(['dist']);
});

// Compile SCSS(SASS) files to CSS and copy to dist/css
gulp.task('scss', function () {
    return gulp.src(['./src/scss/*.scss'])
        .pipe(sass.sync({
            outputStyle: 'expanded'
        }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cleanCSS())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist/assets/css'))
        .pipe(browserSync.stream());
});

// Build Js
gulp.task('webpack', function () {
    return gulp.src('src/js/index.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('./dist/assets/js'))
        .pipe(browserSync.stream());
});

// Copy Images
gulp.task('images', function () {
    return gulp.src("src/*.html").pipe(gulp.dest('./dist/'));
});

// Copy HTML
gulp.task('html', function () {
    return gulp.src("src/img/**").pipe(gulp.dest('./dist/assets/img'));
});


// Configure the browserSync task and watch file path for change
gulp.task('dev', function browserDev(done) {

    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    }, (err, bs) => {
        bs.addMiddleware("*", (req, res) => {
            res.writeHead(302, {
                location: "/"
            });
            res.end("Redirecting!");
        });
    });

    gulp.watch(['src/scss/*.scss', 'src/scss/**/*.scss', '!src/scss/bootstrap/**'], gulp.series('scss', function cssBrowserReload(done) {
        // browserSync.reload();
        done(); //Async callback for completion.
    }));

    gulp.watch(['src/js/*.js', 'src/js/**/*.js'], gulp.series('webpack', function jsBrowserReload(done) {
        browserSync.reload();
        done();
    }));

    gulp.watch(['src/vue/*.vue', 'src/vue/**/*.vue'], gulp.series('webpack', function jsBrowserReload(done) {
        browserSync.reload();
        done();
    }));


    done();
});

// Build task
gulp.task("build", gulp.parallel('scss', 'webpack', 'images', 'html'));

// Default task
gulp.task("default", gulp.series('clean', 'build'));