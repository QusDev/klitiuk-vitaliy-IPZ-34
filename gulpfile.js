const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const sourcemaps = require("gulp-sourcemaps");
const browsersync = require("browser-sync");
const clean = require("gulp-clean");
const fs = require("fs");
const rename = require("gulp-rename");
const concat = require("gulp-concat");

const paths = {
  styles: {
    src: {
      scss: "./style/sass/**/*.scss",
      css: "./style/css/**/*.css",
    },
    dest: "./css",
  },
};

function cleanCss(done) {
  if (fs.existsSync(paths.styles.dest) == false) {
    return done();
  }
  return gulp.src(paths.styles.dest, { read: false }).pipe(clean());
}

function scss() {
  return gulp
    .src(paths.styles.src.scss)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(
      cleanCSS({
        level: 2,
      })
    )
    .pipe(concat("main.min.css"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browsersync.stream());
}

function css() {
  return gulp
    .src(paths.styles.src.css)
    .pipe(sourcemaps.init())
    .pipe(
      cleanCSS({
        level: 2,
      })
    )
    .pipe(rename((path) => (path.extname = ".min.css")))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browsersync.stream());
}

function watch() {
  browsersync.init({
    server: {
      baseDir: "./",
    },
  });
  gulp.watch('./index.html').on('change', browsersync.reload);
  gulp.watch('./portfolio.html').on('change', browsersync.reload);
  gulp.watch(paths.styles.src.scss, scss);
  gulp.watch(paths.styles.src.css, css);
}

const build = gulp.series(
  cleanCss,
  gulp.parallel(scss, css),
  watch
);

exports.build = build;
