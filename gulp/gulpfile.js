const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const gcmq = require('gulp-group-css-media-queries');
const sass = require('gulp-sass');


var config = {
	src: '../',
	html: {
		src: 'index.html'
	},
	css: {
		watch: 'scss/**/*.scss',
		src: 'scss/styles.scss',
		dest: 'css'
	}
};


var onError = function (err) {
    console.log(err);
};


gulp.task('preproc', function(){
	gulp.src(config.src + config.css.src)
		.pipe(sourcemaps.init())
        .pipe(sass({
            onError: function(err) {
                return notify().write(err);
            }
        }))
		.pipe(gcmq())
		.pipe(autoprefixer({
            browsers: ['> 0.1%'],
            cascade: false
        }))
		.pipe(cleanCSS({
			level: 2
		}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(config.src + config.css.dest))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('watch', ['browserSync'], function(){
	gulp.watch(config.src + config.css.watch, ['preproc']);
	gulp.watch(config.src + config.html.src, browserSync.reload);
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: config.src
        }
    });
});
