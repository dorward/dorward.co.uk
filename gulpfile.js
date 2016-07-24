var gulp = require('gulp');
var autoprefix = require('gulp-autoprefixer');
var changed = require('gulp-changed');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var inject = require('gulp-inject');
//var includer = require('gulp-html-ssi');
var minifyCSS = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');
var responsive = require("gulp-responsive");
var svgmin = require('gulp-svgmin');
var svgstore = require('gulp-svgstore');



// default gulp task
gulp.task('default', ['imagemin', 'htmlpage', 'styles'], function() {

	gulp.watch('./src/*.html', function() {
		gulp.run('htmlpage');
	});

	// watch for JS changes
	gulp.watch('./src/scripts/*.js', function() {
		gulp.run('jshint', 'scripts');
	});

	// watch for CSS changes
	gulp.watch('./src/styles/*.css', function() {
		gulp.run('styles');
	});

});

// minify and resize new images
gulp.task('imagemin', function() {
	var imgSrc = './src/images/**/*.jpeg',
		imgDst = './build/images';

	gulp.src(imgSrc)
		.pipe(changed(imgDst))
		.pipe(responsive({
			'*.jpeg': {
				width: 280,
				rename: { suffix: '-280' },
			},
		}, {
			quality: 70, // The output quality for JPEG, WebP and TIFF output formats
			progressive: true,
			compressionLevel: 6, // Zlib compression level of PNG output format
			withMetadata: false,
		}))
		.pipe(imagemin())
		.pipe(gulp.dest(imgDst));
});

// SVG image
gulp.task('htmlpage', function() {

	var htmlSrc = './src/*.html';
	var htmlDst = './build';
    var svgs = gulp
        .src('./src/images/icons/*.svg')
        .pipe(svgstore({ inlineSvg: true }));


    function fileContents (filePath, file) {
        return file.contents.toString();
    }

	return gulp.src(htmlSrc)
		.pipe(changed(htmlDst))
		.pipe(inject(svgs, { transform: fileContents }))
		.pipe(minifyHTML())
		.pipe(gulp.dest(htmlDst));

});


// // minify new or changed HTML pages
// gulp.task('htmlpage', function() {
// 	var htmlSrc = './src/*.html',
// 		htmlDst = './build';

// 	gulp.src(htmlSrc)
// 		.pipe(changed(htmlDst))
// 		.pipe(includer())
// 		.pipe(minifyHTML())
// 		.pipe(gulp.dest(htmlDst));
// });

// CSS concat, auto-prefix and minify
gulp.task('styles', function() {
	gulp.src(['./bower_components/bootstrap/dist/css/bootstrap.min.css', './src/styles/*.css'])
		.pipe(concat('styles.css'))
		.pipe(autoprefix('last 2 versions'))
		.pipe(minifyCSS())
		.pipe(gulp.dest('./build/styles/'));
});