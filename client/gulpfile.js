const gulp = require("gulp");
const sass = require("gulp-sass");
const minify = require('gulp-minify');
const notify = require( 'gulp-notify' );


function cssfy() {
    return (
      gulp
        .src("./src/assets/styles/importer.scss")
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest("./src/assets/styles/"))
        .pipe( notify({ message: '\n\n✅  ===> STYLE — completed!\n', onLast: true }) )
    );
}

function watch() {
    gulp.watch("./src/assets/styles/**/*.scss", cssfy);
    gulp.watch("./src/assets/styles/**/*.scss");
}
  
exports.cssfy = cssfy;
exports.watch = watch;