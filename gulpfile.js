// Load plugins
const autoprefixer = require("gulp-autoprefixer");
const browsersync = require("browser-sync").create();
const cleanCSS = require("gulp-clean-css");
const gulp = require("gulp");
// const header = require("gulp-header");
const plumber = require("gulp-plumber")
const rename = require("gulp-rename");
const sass = require("gulp-sass");
const uglify = require("gulp-uglify");
const pkg = require('./package.json');

// Copy third party libraries from /node_modules into /vendor
gulp.task('vendor', function(done) {

  // Bootstrap
  gulp.src([
      './node_modules/bootstrap/dist/**/*',
      '!./node_modules/bootstrap/dist/css/bootstrap-grid*',
      '!./node_modules/bootstrap/dist/css/bootstrap-reboot*'
    ])
    .pipe(gulp.dest('./dist/vendor/bootstrap'))

  // Font Awesome 
  gulp.src([
      './node_modules/@fortawesome/**/*',
    ])
    .pipe(gulp.dest('./dist/vendor'))

  // jQuery
  gulp.src([
      './node_modules/jquery/dist/*',
      '!./node_modules/jquery/dist/core.js'
    ])
    .pipe(gulp.dest('./dist/vendor/jquery'))

  // jQuery Easing
  gulp.src([
      './node_modules/jquery.easing/*.js'
    ])
    .pipe(gulp.dest('./dist/vendor/jquery-easing'))

  done();

});

/* gulp.task('copy', function(done) {
    gulp.src([
        './src/*.php',
        './src/views/*.php',
        './src/views/*.php'
      ])
      .pipe(gulp.dest('./dist'))

    done();
}); */

function css() {
    return gulp
      .src("./src/scss/*.scss")
      .pipe(plumber())
      .pipe(sass({
        outputStyle: "expanded"
      }))
      .on("error", sass.logError)
      .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      }))
    //   .pipe(header(banner, {
    //     pkg: pkg
    //   }))
      .pipe(gulp.dest("./dist/assets/css"))
      .pipe(rename({
        suffix: ".min"
      }))
      .pipe(cleanCSS())
      .pipe(gulp.dest("./dist/assets/css"))
      .pipe(browsersync.stream());
  }

  function js() {
    return gulp
      .src(["./src/js/*.js"])
      .pipe(gulp.dest('./dist/assets/js'))
      .pipe(uglify())
      .pipe(rename({
        suffix: '.min'
      }))
      .pipe(gulp.dest('./dist/assets/js'))
      .pipe(browsersync.stream());
  }
  

// Tasks
gulp.task("css", css);
gulp.task("js", js);

// BrowserSync
function browserSync(done) {
  browsersync.init({
    proxy: {
        target: "localhost/mydev/portfolio/dist/"
    }
  });
  done();
}

// BrowserSync Reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

// Watch files
function watchFiles() {
  gulp.watch("./src/scss/**/*", css);
  gulp.watch("./src/js/*.js", js);
  gulp.watch("./dist/**/*.php", browserSyncReload);
}

gulp.task("default", gulp.parallel('vendor', css, js));

// dev task
gulp.task("dev", gulp.parallel(watchFiles, browserSync));