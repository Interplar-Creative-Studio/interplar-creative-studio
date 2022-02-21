const { task, series, parallel } = require('gulp');

const pug2html = require('./tasks/pug2html');
const pug2html_prod = require('./tasks/production/pug2html');

const scss2css = require('./tasks/scss2css');
const scss2css_prod = require('./tasks/production/scss2css');

const scripts = require('./tasks/scripts');
const scripts_prod = require('./tasks/production/scripts');

const fonts = require('./tasks/fonts');
const static = require('./tasks/static');
const favicons = require('./tasks/favicons');
const images = require('./tasks/images');
const clean = require('./tasks/clean');

const serve = require('./tasks/serve');
const serve_prod = require('./tasks/production/serve');

const dev = series(pug2html, scss2css, scripts, fonts, images);
const prod = series(pug2html_prod, scss2css_prod, scripts_prod, fonts, static, favicons, images);

task('serve:dev', series(serve));
task('serve:prod', series(serve_prod));

task('start:clean', series(clean, dev, serve));
task('start:dev', series(dev, serve));
task('start:prod', series(dev, prod));

task('compile:dev', series(clean, dev));
task('compile:prod', series(clean, prod));

task('useref:dev', scripts);
task('useref:prod', scripts_prod);

task('imagemin:dev', images);
task('imagemin:prod', images);

task('clean', clean);