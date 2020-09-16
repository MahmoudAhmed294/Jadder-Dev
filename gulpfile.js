let gulp = require("gulp"),
  concat = require("gulp-concat"),
  htmlmin = require("gulp-htmlmin"),
  prefix = require("gulp-autoprefixer"),
  sass = require("gulp-sass"),
  sourcemaps = require("gulp-sourcemaps"),
  uglify = require("gulp-uglify"),
  uglifyjs = require("uglify-js"),
  composer = require("gulp-uglify/composer"),
  pump = require("pump"),
  notify = require("gulp-notify"),
  image = require("gulp-image"),
  webp = require("gulp-webp"),
  ttf2woff = require('gulp-ttf2woff');

var minify = composer(uglifyjs);


gulp.task("index", function () {
  return (
    gulp
    .src("project/page/*.html") //  html      لنقل اي ملف امتداده
    // .pipe(concat("index.html"))
    .pipe(gulp.dest("./dist/page"))
    // .pipe(notify("HTML done"))
  );
});
gulp.task("minify", () => {
  return gulp.src("project/page/*.html").pipe(htmlmin()).pipe(gulp.dest("./dist/"));
});

gulp.task("sass", function () {
  return gulp
    .src("./project/css/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./dist/css"))
  // .pipe(notify("SCSS done"));
});

gulp.task("css", function () {
  return gulp
    .src("project/css/main.scss")
    .pipe(sass())
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: "compressed"
    })) //(لضغط الملفات )
    .pipe(prefix("last 2 versions")) // last 2 versions of browsers
    .pipe(concat("main.css"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./dist/css/"));
});
gulp.task("js", function () {
  return gulp
    .src("project/js/*.js") //    لو ضع كل الكود الخاص بي جافا سكريبت  من جميع  الملفات في ملف واحد
    // .pipe(concat("main.js"))
    .pipe(gulp.dest("./dist/js/"))
  // .pipe(notify("js done"));
});

gulp.task("compress", function () {
  // the same options as described above

  pump([gulp.src("project/js/main.js"), minify(), gulp.dest("./dist/js/")]);
  // pump([gulp.src("project/*.html"), minify(), gulp.dest("./dist/")]);
});

gulp.task("image", () => {
  gulp
    .src("./project/**/*")
    .pipe(
      image({
        pngquant: true,
        optipng: false,
        zopflipng: true,
        jpegRecompress: false,
        mozjpeg: true,
        gifsicle: true,
        svgo: true,
        concurrent: 10,
        quiet: true, // defaults to false
      })
    )
    .pipe(webp())
    .pipe(gulp.dest("./dist//"));
});
gulp.task('ttf2woff', function () {
  gulp.src(['fonts/*.ttf'])
    .pipe(ttf2woff())
    .pipe(gulp.dest('dist/font/'));
});

gulp.task("watch", function () {
  gulp.watch("project/page/*.html", gulp.series("index"));
  gulp.watch("project/css/main.scss", gulp.series("css"));
  gulp.watch("./project/css/**/*.scss", gulp.series("sass"));
  gulp.watch("./dist/js/", gulp.series("compress"));
  gulp.watch("project/js/*.js", gulp.series("js"));
  gulp.watch("./project/img/*", gulp.series("image"));
  gulp.watch("./fonts/*.ttf", gulp.series("ttf2woff"));
});