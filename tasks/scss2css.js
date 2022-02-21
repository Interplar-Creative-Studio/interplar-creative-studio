const { src, dest } = require('gulp');

const plumber = require('gulp-plumber');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const concat = require('gulp-concat');
const cssbeautify = require('gulp-cssbeautify');

module.exports = function scss2css() {
	var plugins = [
		autoprefixer({
			overrideBrowserslist: ['last 8 versions'],
			browsers: [
				'Android >= 4',
				'Chrome >= 20',
				'Firefox >= 24',
				'Explorer >= 11',
				'iOS >= 6',
				'Opera >= 12',
				'Safari >= 6',
			],
		}),
	];

	return src('app/assets/styles/**/*.scss')
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
		.pipe(concat('styles.min.css'))
		.pipe(postcss(plugins))
    .pipe(cssbeautify())
		.pipe(sourcemaps.write('/sourcemaps/'))
		.pipe(dest('build/assets/css'));
};
