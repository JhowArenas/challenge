const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const watch = require('gulp-watch')

const { series, parallel } = gulp;

function appCSS() {
    return gulp.src('./resources/css/*.css')
        .pipe(uglifycss({ "uglyComments": true }))
        .pipe(concat("app.min.css"))
        .pipe(gulp.dest("./src/asset/css/"))
}

function appJS() {
    return gulp.src('./resources/js/*.js')
        .pipe(babel({
            comments: false,
            presets: ["env"]
        }))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('./src/asset/js/'))
}

gulp.task('appCSS', appCSS)
gulp.task('appJS', appJS)

function watcher(cb) {
    watch('./resources/css/*.css', () => gulp.series('appCSS')())
    watch('./resources/js/*.js', () => gulp.series('appJS')())
}

module.exports.default = series(
    parallel(
        series(appCSS, appJS)
    ),
    watcher
)