const { src, dest } = require('gulp');

const pug = require('gulp-pug');
const pugLinter = require('gulp-pug-linter');
const htmlbeautify = require('gulp-html-beautify');
const plumber = require('gulp-plumber');

module.exports = function pug2html() {
  var options = {
    indentSize: 2,
  };

  return src('app/views/pages/**/*.pug')
    .pipe(plumber())
    .pipe(pugLinter({ reporter: 'default' }))
    .pipe(pug())
    .pipe(htmlbeautify(options))
    .pipe(dest('build'));
};
