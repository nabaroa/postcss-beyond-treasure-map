// PostCSS Demo for Codemotion2016
var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssimport = require('postcss-import'),
    customproperties = require('postcss-custom-properties'),
    apply = require('postcss-apply'),
    mixins = require('postcss-mixins'),
    nested = require('postcss-nested'),
    customMedia = require("postcss-custom-media")
    nano = require('gulp-cssnano'),
    notify = require('gulp-notify');

gulp.task('css', function() {
    var processors = [
      cssimport,
      autoprefixer,
      customproperties,
      apply,
      mixins,
      nested,
      customMedia
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
        .pipe(gulp.dest('./css'))
        .pipe(notify({ message: 'Your demo CSS is ready =^_^=' }));
});
// Watch
gulp.task('watch', function() {
    // Watch .css files
    gulp.watch('src/**/*.css', ['css']);

});

// Default
gulp.task('default', ['css', 'watch',]);
