const {parallel, watch, src, dest} = require("gulp"),
    autoprefix = require("gulp-autoprefixer"),
    changed = require("gulp-changed"),
    cleanCSS = require("gulp-clean-css"),
    concat = require("gulp-concat"),
    imagemin = require("gulp-imagemin"),
    inject = require("gulp-inject"),
    responsive = require("gulp-responsive"),
    sourcemaps = require('gulp-sourcemaps'),
    svgstore = require("gulp-svgstore"),
    cssSrc = "./src/styles/*.css",
    htmlSrc = "./src/*.html",
    svgSrc = "./src/images/icons/*.svg",
    imgSrc = "./src/images/**/*.jpeg";

function fileContents(...args) {
    const file = 1;

    return args[file].contents.toString(); 
}

function images() {
    const imgDst = "./build/images/";

    return src(imgSrc).
        pipe(imagemin()).
        pipe(responsive({
            "*.jpeg": {
                "rename": {"suffix": "-280"},
                "width": 280
            }
        }, {
            // zlib compression level of PNG output format
            "compressionLevel": 6, 
            "progressive": true,
            // the output quality for JPEG, WebP and TIFF output formats
            "quality": 70, 
            "withMetadata": false
        })).
        pipe(dest(imgDst));
}

function styles() {
    return src([cssSrc]).
        pipe(sourcemaps.init()).
        pipe(concat("styles.css")).
        pipe(autoprefix("last 2 versions")).
        pipe(cleanCSS()).
        pipe(sourcemaps.write("../maps")).
        pipe(dest("./build/styles/"));
}

function page() {
    const htmlDst = "./build",
        svgs = src(svgSrc).
            pipe(svgstore({"inlineSvg": true}));
    
    return src(htmlSrc).
        pipe(changed(htmlDst)).
        pipe(inject(svgs, {"transform": fileContents})).
        pipe(dest(htmlDst));

}

const defaultTask = parallel(images, styles, page);

function watchTask() {
    watch(htmlSrc, page);
    watch(svgSrc, page);
    watch(imgSrc, images);
    watch(cssSrc, styles);
}

exports.default = defaultTask;
exports.watch = watchTask;