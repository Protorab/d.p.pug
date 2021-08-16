const { src, dest, parallel, series, watch } = require("gulp");
const browserSync = require("browser-sync").create();
const webpack = require("webpack-stream");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const rename = require("gulp-rename");
const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");
const rsync = require("gulp-rsync");
const del = require("del");
const fileInclude = require("gulp-file-include");
const groupMedia = require("gulp-group-css-media-queries");
const ttf2woff = require("gulp-ttf2woff");
const ttf2woff2 = require("gulp-ttf2woff2");
const cleanCss = require("gulp-clean-css");
const pug = require("gulp-pug");
const bssi = require("browsersync-ssi");
const ssi = require("ssi");
const distFolder = "dist"; //project folder name
const appFolder = "app"; //work folder name

// path to folder
const path = {
  // path to finished project
  build: {
    html: distFolder + "/",
    css: distFolder + "/css/",
    js: distFolder + "/js/",
    img: distFolder + "/img/",
    fonts: distFolder + "/fonts/",
    assets: distFolder + "/assets/",
  },

  // path to folder name
  src: {
    html: [appFolder + "/*.html", "!" + appFolder + "/_*.html"],
    pug: appFolder + "/*.pug",
    css: appFolder + "/scss/*.scss",
    js: appFolder + "/js/main.js",
    img: appFolder + "/img/**/*.+(png|jpg|gif|ico|svg|webp)",
    fonts: appFolder + "/fonts/*",
    assets: appFolder + "/assets/**/*",
  },

  // watch path
  watch: {
    html: appFolder + "/**/*.html",
    pug: appFolder + "/**/*.pug",
    css: appFolder + "/scss/*.scss",
    js: appFolder + "/js/**/*.js",
    img: appFolder + "/img/**/*.+(png|jpg|gif|ico|svg|webp)",
    assets: appFolder + "/assets/**/*",
  },

  // clean path
  clean: "./" + distFolder + "/",
};

function browsersync() {
  browserSync.init({
    server: {
      baseDir: "./" + distFolder + "/",
    },
    notify: false,
    online: true,
  });
}

function scripts() {
  return src(path.src.js)
    .pipe(
      webpack({
        mode: "production",
        module: {
          rules: [
            {
              test: /\.(js)$/,
              exclude: /(node_modules)/,
              loader: "babel-loader",
              query: {
                presets: ["@babel/env"],
              },
            },
          ],
        },
      })
    )
    .on("error", function handleError() {
      this.emit("end");
    })
    .pipe(rename("main.min.js"))
    .pipe(dest(path.build.js))
    .pipe(browserSync.stream());
}

function styles() {
  return src(path.src.css)
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(
      autoprefixer({ overrideBrowserslist: ["last 10 versions"], grid: true })
    )
    .pipe(groupMedia())
    .pipe(dest(path.build.css))
    .pipe(
      cleanCss({
        level: {
          1: {
            all: true,
            specialComments: 0,
          },
          2: {
            all: true,
          },
        },
      })
    )
    .pipe(rename("main.min.css"))
    .pipe(dest(path.build.css))
    .pipe(browserSync.stream());
}

function images() {
  return src(path.src.img)
    .pipe(newer(path.build.img))
    .pipe(
      imagemin({
        progressive: true,
        svgPlugins: [
          {
            removeViewBox: false,
          },
        ],
        interlaced: true,
        optimizationLevel: 3, //0 to 7,
      })
    )
    .pipe(dest(path.build.img))
    .pipe(browserSync.stream());
}

function assets() {
  return src(path.src.assets)
    .pipe(dest(path.build.assets))
    .pipe(browserSync.stream());
}

function pugFunc() {
  return src(path.src.pug)
    .pipe(
      pug({
        pretty: true,
      })
    )
    .pipe(dest(path.build.html))
    .pipe(browserSync.stream());
}

function html() {
  return src(path.src.html)
    .pipe(fileInclude())
    .pipe(dest(path.build.html))
    .pipe(browserSync.stream());
}

function buildhtml() {
  let includes = new ssi(appFolder + "/", distFolder + "/", "/**/*.html");
  includes.compile();
  return src(path.src.html).pipe(browserSync.stream());
}

function cleanimg() {
  return del("app/img/dest/**/*", { force: true });
}

function fonts() {
  return (
    src(path.src.fonts)
      // .pipe(ttf2woff())
      // .pipe(dest(path.build.fonts))
      .pipe(ttf2woff2())
      .pipe(dest(path.build.fonts))
  );
}

function startwatch() {
  watch([path.watch.css], styles);
  watch([path.watch.js], scripts);
  watch([path.watch.img], images);
  watch([path.watch.html], buildhtml);
  watch([path.watch.assets], assets);
  watch([path.watch.pug], pugFunc);
}

function clean() {
  return del(path.clean);
}

exports.scripts = scripts;
exports.styles = styles;
exports.images = images;
exports.assets = assets;
exports.html = html;
exports.pugFunc = pugFunc;
exports.fonts = fonts;
exports.cleanimg = cleanimg;
exports.default = series(
  clean,
  scripts,
  images,
  styles,
  parallel(browsersync, startwatch, assets, fonts, pugFunc) //buildhtml,
);
