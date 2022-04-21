import gulp from "gulp";
import gulpSass from "gulp-sass";
import nodeSass from "node-sass";
import autoPrefixer from "gulp-autoprefixer";
import minifyCSS from "gulp-csso";
import del from "del";
import bro from "gulp-browserify";
import Babelify from "babelify";

const paths = {
    styles: {
        src: "assets/scss/styles.scss",
        dest: "src/static/styles",
        watch: "assets/scss/**/*.scss",
    },
    js: {
        src: "assets/js/main.js",
        dest: "src/static/js",
        watch: "assets/js/**/*.js",
    },
};
const sass = gulpSass(nodeSass);

// delete folder
function clean() {
    return del(["src/static"]);
}

export function styles() {
    return gulp
        .src(paths.styles.src)
        .pipe(sass())
        .pipe(autoPrefixer({ cascade: false }))
        .pipe(minifyCSS())
        .pipe(gulp.dest(paths.styles.dest));
}

function watchFiles() {
    gulp.watch(paths.styles.watch, styles);
    gulp.watch(paths.js.watch, js);
}

const js = () =>
    gulp
        .src(paths.js.src)
        .pipe(
            bro({
                transform: [
                    Babelify.configure({
                        presets: ["@babel/preset-env"],
                    }),
                ],
            })
        )
        .pipe(gulp.dest(paths.js.dest));

const dev = gulp.series([clean, styles, js, watchFiles]);

export const build = gulp.series([clean, styles, js]);

// 기본적으로 dev 실행
export default dev;
