const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

gulp.task('sass', () => {
    return gulp.src(['scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest("app/public/css"))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('js', function() {
    return gulp.src(['js/*.js'])
        .pipe(gulp.dest("app/public/js"))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: 'app'
        },
    })
})

gulp.task('watch', ['browserSync', 'sass', 'js'], function () {
    gulp.watch('./scss/**/*.scss', ['sass']);
    gulp.watch('./js/**/*.js', ['js']);
    gulp.watch('app/*.html', browserSync.reload);    
    // Other watchers
});