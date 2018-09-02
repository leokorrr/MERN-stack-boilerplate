var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('app/client/src/scss/**/*scss')
        .pipe(sass())
        .pipe(gulp.dest('app/client/src/'))
})

gulp.task('watch', function(){
    gulp.watch('app/client/src/scss/**/*scss', ['sass']);
  })