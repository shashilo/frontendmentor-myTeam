const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

//compile scss into css
function build() {
    //1.where is my scss
    return gulp.src('src/scss/**/*.scss') //gets all files ending with .scss in src/scss
    //2. pass that file through sass compiler
        .pipe(sass().on('error',sass.logError))
        //3. where do I save the compiled css file
        .pipe(gulp.dest('src/css'))
        //4. stream change to all browsers
        .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: "./src",
            index: "/index.html"
        }
    });
    gulp.watch('src/scss/**/*.scss', build);
    gulp.watch('src/*.html').on('change',browserSync.reload);
    gulp.watch('src/js/**/*.js').on('change', browserSync.reload);
}

exports.build = build;
exports.watch = watch;