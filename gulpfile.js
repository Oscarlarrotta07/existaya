const gulp = require("gulp");
const pug = require("gulp-pug");
const fs = require("fs");
const sass = require("gulp-sass")(require("sass"));

const files = ["data"];

function compilePug() {
  const data = files.reduce((acc, item) => {
    return {
      ...acc,
      [item]: JSON.parse(fs.readFileSync("./data/" + item + ".json", "utf8")),
    };
  }, {});
  return gulp
    .src("./source/pug/**/!(_)*.pug")
    .pipe(
      pug({
        pretty: true,
        data,
      })
    )
    .pipe(gulp.dest("./build"));
}

function compileStyles() {
  return gulp
    .src("./source/sass/**/!(_)*.scss")
    .pipe(sass())
    .pipe(gulp.dest("./build/css"));
}

function watchPug() {
  gulp.watch(
    ["source/pug/**/*.pug", "./data/*.json"],
    { ignoreInitial: false },
    compilePug
  );
}

function watchStyles() {
  gulp.watch(
    ["source/sass/**/*.scss"],
    { ignoreInitial: false },
    compileStyles
  );
}

exports.compilePug = compilePug;
exports.watchPug = watchPug;
exports.compileStyles = compileStyles;
exports.watchStyles = watchStyles;
