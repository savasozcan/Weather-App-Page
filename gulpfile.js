const gulp        = require('gulp');
const sass        = require('gulp-sass');
const browserSync = require('browser-sync').create();
const uglify      = require('gulp-uglify');
const minifyCSS   = require('css-minify');
const cleanCSS    = require('gulp-clean-css');
const imagemin    = require('gulp-imagemin');

/*-----------------------------------------------
   Compile scss => css
------------------------------------------------*/
function style() {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/css'))
        .pipe(browserSync.stream());
}

/*-----------------------------------------------
   Minify Javascript
------------------------------------------------*/
gulp.task('uglify', function () {
        gulp.src('./src/js/*.js')
            .pipe(uglify())
            .pipe(gulp.dest('./dist/js'))
    });

/*-----------------------------------------------
   Minify CSS
------------------------------------------------*/
gulp.task('minify-css', function () {
  return  gulp.src('./src/css/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('./dist/css'))
});

/*-----------------------------------------------
   Minify Images
------------------------------------------------*/
gulp.task('imagemin', () =>
    gulp.src('./src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'))
);

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./src/scss/*.scss', style)
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./src/js/*.js', ).on('change', browserSync.reload);

}

exports.style  = style;
exports.watch  = watch;
