const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function compilaSass() {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('dist/css'));
}

exports.sass = compilaSass;