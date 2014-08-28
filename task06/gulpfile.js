var gulp = require('gulp')
	jasmine = require('gulp-jasmine');
	
gulp.task('default', function () {
    gulp.src('spec/test.js')
        .pipe(jasmine());
});