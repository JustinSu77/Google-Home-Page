const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('prefix', async function(){
    gulp.src('resources/css/style.css')
        .pipe(autoprefixer())
    .pipe(gulp.dest('resources/build'))
});

gulp.task('watch', function() {
    gulp.watch('resources/css/style.css', gulp.series('prefix'));
});