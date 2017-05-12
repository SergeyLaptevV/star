var gulp = require('gulp');
var wiredep = require('wiredep').stream;
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');

// bower
gulp.task('bower', function () {
  gulp.src('index.html')
    .pipe(wiredep({
      optional: 'configuration',
      goes: 'here'
    }))
    .pipe(gulp.dest('../app'));
});

// Build
gulp.task('html', function () {
    return gulp.src('index.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(gulp.dest('../dist'));
});


// watch
gulp.task('watch', function () {
    gulp.watch('bower.json',['bower']);
});

