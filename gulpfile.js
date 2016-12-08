var gulp = require('gulp');
var util = require('gulp-util');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var cleanCss = require('gulp-clean-css');
var templateCache = require('gulp-angular-templatecache');
var browserify = require('gulp-browserify');
var ngHtml2Js = require('browserify-ng-html2js');
var stylish = require('jshint-stylish');
var sourcemaps = require('gulp-sourcemaps');

var paths = {
    vendors: [
        'bower_components/jquery/dist/jquery.min.js',
        'bower_components/bootstrap/dist/js/bootstrap.min.js',
        'bower_components/angular/angular.min.js',
        'bower_components/angular-ui-router/release/angular-ui-router.min.js',
        'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
        'bower_components/angular-sanitize/angular-sanitize.min.js',
        'bower_components/ngAnimate/js/angular-animate.min.js',
        'src/app/assets/js/angular-confirm.min.js'
    ],
    css: [
        'bower_components/bootstrap/dist/css/bootstrap.min.css',
        'bower_components/font-awesome/css/font-awesome.min.css',
        'src/app/assets/css/angular-confirm.min.css'
    ],
    custom_css: 'src/app/assets/css/main.css',
    bundles: [
        'src/app/app.module.js',
        'src/app/app.constants.js',
        'src/app/app.config.js',
        'src/app/app.routes.js',
        'src/app/**/*.routes.js',
        'src/app/**/*.services.js',
        'src/app/**/*.controller.js',
        'src/app/**/*.directive.js'
    ],
    templates: [
        'src/app/comment/**/*.html',
        'src/app/home/**/*.html',
        'src/app/post/**/*.html',
        'src/app/user/**/*.html',
        'src/app/about/**/*.html',
        'src/app/components/**/*.html'
    ],
    fonts: 'bower_components/font-awesome/fonts/*.*'
};

//tasks
gulp.task('default', ['build-index', 'build-vendors', 'build-css', 'build-custom-css', 'build-bundles', 'build-templates', 'copy-fonts'], defaultTask);
gulp.task('build-index', buildIndex);
gulp.task('build-vendors', buildVendors);
gulp.task('build-css', buildCss);
gulp.task('build-custom-css', buildCustomCss);
gulp.task('build-bundles', buildBundles);
gulp.task('build-templates', buildTemplates);
gulp.task('copy-fonts', copyFonts);


//watches
gulp.watch(paths.bundles, watchBundles);
gulp.watch(paths.templates, watchTemplates);
gulp.watch(paths.custom_css, watchCustomCss);
gulp.watch('src/app/index.html', watchIndex);


function defaultTask() {
    return util.log('Gulp is running!');
}


function buildIndex() {
    gulp
        .src('src/app/index.html')
        .pipe(gulp.dest('dist'));
}

function copyFonts() {
    gulp
        .src(paths.fonts)
        .pipe(gulp.dest('dist/assets/fonts'))
}

function buildVendors() {
    gulp
        .src(paths.vendors)
        .pipe(sourcemaps.init())  
        .pipe(concat('vendors.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/assets/js/'));
}

function buildCss() {
    gulp
        .src(paths.css)
        .pipe(cleanCss())
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('dist/assets/css/'))
}

function buildCustomCss() {
    gulp
        .src(paths.custom_css)
        .pipe(cleanCss())
        .pipe(concat('main.css'))
        .pipe(gulp.dest('dist/assets/css/'))
}

function buildBundles() {
    gulp
        .src(paths.bundles)
        .pipe(sourcemaps.init())  
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        .pipe(concat('bundles.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/assets/js/'));
}

function buildTemplates() {
    gulp
        .src(paths.templates)
        .pipe(templateCache('templateCache.js', {
            module: 'app.module'
        }))
        .pipe(gulp.dest('dist/templates/'))
}


function watchBundles() {
    gulp.start('build-bundles');
}

function watchTemplates() {
    gulp.start('build-templates');
}

function watchIndex() {
    gulp.start('build-index')
}

function watchCustomCss() {
    gulp.start('build-custom-css');
}