const gulp = require("gulp");
const concat = require("gulp-concat");
const path = require("path");

gulp.task("clean", () =>
  gulp.src("./dist", { read: false, allowEmpty: true, })
    .pipe(require("gulp-clean")())
);

gulp.task("vendor", () =>
  gulp.src([
    path.join(path.dirname(require.resolve("angular")), "angular.js"),
  ])
    .pipe(concat("vendor.js"))
    .pipe(gulp.dest("./dist/js/"))
);

gulp.task("templates", () =>
  gulp.src("./src/js/**/*.tpl.html")
    .pipe(require("gulp-ng-html2js")({
      moduleName: "templates",
      prefix: "./js/",
    }))
    .pipe(concat("templates.js"))
    .pipe(gulp.dest("./dist/js/"))
);

gulp.task("main", () => {
  const js = [
    "./src/js/data-utils.js",
    "./src/js/app/common-service.js",
    "./src/js/**/*.js"
  ]
  return gulp.src(js)
  .pipe(concat("main.js"))
  .pipe(gulp.dest("./dist/js/"))
});

gulp.task("style", () =>
  gulp.src([
    "./src/less/style.less",
    "./src/js/**/*.less",
  ])
    .pipe(require("gulp-less")({
      paths: [
        path.join(__dirname, "src", "less"),
      ],
    }))
    .pipe(concat("style.css"))
    .pipe(gulp.dest("./dist/style/"))
);

gulp.task("index", () =>
  gulp.src("./src/index.html")
    .pipe(gulp.dest("./dist/"))
);

gulp.task("assets", () =>
  gulp.src("./src/assets/**/*")
    .pipe(gulp.dest("./dist/assets/"))
);

gulp.task("default", gulp.series(
  "clean",
  gulp.parallel(
    "vendor",
    "templates",
    "main",
    "style",
    "index",
    "assets",
  ),
));
