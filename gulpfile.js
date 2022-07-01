const gulp = require('gulp');
const dom = require('gulp-dom');
const inlinesource = require('gulp-inline-source');
const replace = require('gulp-replace');

function prebundle() {
    return gulp.src('./package.json')
        .pipe(replace('\"homepage\"', '\"homepage_DelToDeploy_\"'))
        .pipe(gulp.dest('.'));
}

function bundle() {
    return gulp.src('./build/*.html')
        .pipe(replace('rel="stylesheet">', 'rel="stylesheet" inline>'))
        .pipe(replace('defer="defer" ', 'type="text/javascript" data-id="script" '))
        .pipe(replace('.js"></script>', '.js" inline></script>'))
        .pipe(replace())
        .pipe(dom(function () {
            this.body.appendChild(this.querySelector('[data-id="script"]'))
        }))
        .pipe(replace('data-id="script" ', ''))
        .pipe(inlinesource({
            compress: false,
        }))
        .pipe(gulp.dest('./build/bundle'))
}

function cleanup() {
    return gulp.src('./package.json')
        .pipe(replace('\"homepage_DelToDeploy_\"', '\"homepage\"'))
        .pipe(gulp.dest('.'));
}

exports.prebundle = prebundle;

exports.default = gulp.series(bundle,cleanup);