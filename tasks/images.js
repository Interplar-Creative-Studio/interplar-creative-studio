const { src, dest } = require('gulp');

const imagemin = require('gulp-imagemin');

module.exports = function imageMinify() {
  return src('app/assets/img/*.{gif,png,jpg,svg,webp}')
		.pipe(dest('build/assets/img'));
};
