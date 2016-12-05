var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    cssnext = require('postcss-cssnext'),
    precss = require('precss'),
    notify = require('gulp-notify'),
    nano = require('gulp-cssnano');

gulp.task('css', function() {
    var processors = [
        cssnext,
        precss
    ];
    var configNano = {
      autoprefixer: { browsers: 'last 2 versions' },
      discardComments: { removeAll: true },
      safe: true
    };
    return gulp.src('./src/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dest'))
        .pipe(nano(configNano))
        .pipe(gulp.dest('./app/css'))
        .pipe(notify({ message: 'Your CSS is ready ;)' }));
});


// Watch
gulp.task('watch', function() {
    // Watch .css files
    gulp.watch('src/**/*.css', ['css']);

});


// Default
gulp.task('default', ['css', 'watch']);
