const gulp = require('gulp');
const dom = require('gulp-dom');
const inlinesource = require('gulp-inline-source');
const replace = require('gulp-replace');

gulp.task('default', () => {
    return gulp.src('./build/*.html')
        .pipe(replace('rel="stylesheet">', 'rel="stylesheet" inline>'))
        .pipe(replace('defer="defer" ', 'type="text/javascript" data-id="script" '))
        .pipe(replace('.js"></script>', '.js" inline></script>'))
        .pipe(dom(function() {
            this.body.appendChild(this.querySelector('[data-id="script"]'))
        }))
        .pipe(replace('data-id="script" ', ''))
        .pipe(inlinesource({
            compress: false,
        }))
        .pipe(gulp.dest('./build/bundled'))
});