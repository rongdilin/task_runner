var gulp = require('gulp');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var gp_concat = require('gulp-concat');


gulp.task('jshint', function(){
    return gulp.src('files/js/*.js')
        .pipe(jshint({
            undef: true,
            esversion: 6,
            browser: true,
            devel: true,
            globals: {
                jQuery: true
            }
        }));
})


gulp.task('uglify', function(){
    gulp.src('files/js/*.js')
    .pipe(gp_concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('files/js_prod/'));
});


//configure the watch
gulp.task('watch', function () {
    gulp.watch('src/js/*.js', ['jshint', 'compress']);
    gulp.watch('src/css/*.css', ['compress_css']);
});

gulp.task('default', ['watch']);



