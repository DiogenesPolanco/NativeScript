'use strict';

var gulp = require('gulp'),
    debug = require('gulp-debug'),
    inject = require('gulp-inject'),
    tsc = require('gulp-typescript'),
    tslint = require('gulp-tslint'),
    sourcemaps = require('gulp-sourcemaps'),
    del = require('del'),
    Config = require('./gulpfile.config'),
    tsProject = tsc.createProject('tsconfig.json'),
    browserSync = require('browser-sync'),
    superstatic = require( 'superstatic' ),
    gutil = require('gulp-util'),
    spawn =  require('child_process').spawn;

var config = new Config();
  
gulp.task('run', function() { 
    var child = spawn('tns', ['run', 'android']);
    var stdout = '';
    var stderr = '';
    
    child.stdout.setEncoding('utf8');
    child.stdout.on('data', function (data) {
        stdout += data;
        console.log(gutil.colors.green(data));
    });
    
    child.stderr.setEncoding('utf8');
    child.stderr.on('data', function (data) {
        stderr += data;
        gutil.log(gutil.colors.red(data));
        gutil.beep();
    });
    
    child.on('close', function(code) {
        console.log('Done with exit code', code);
    }); 
});
  
/**
 * Lint all custom TypeScript files.
 */
gulp.task('lint', function () {
    return gulp.src(config.allTypeScript).pipe(tslint()).pipe(tslint.report('prose'));
});

/**
 * Compile TypeScript and include references to library and app .d.ts files.
 */
gulp.task('compile', function () {
    var sourceTsFiles = [config.allTypeScript,config.libraryTypeScriptDefinitions];  
    var tsResult = gulp.src(sourceTsFiles).pipe(tsc(tsProject)); 
        tsResult.dts.pipe(gulp.dest(config.tsOutputPath));
        return tsResult.js
                        .pipe(sourcemaps.write('.'))
                        .pipe(gulp.dest(config.tsOutputPath));
});
  
/**
 * Remove all generated JavaScript files from TypeScript compilation.
 */
gulp.task('clean', function (cb) {
  var typeScriptGenFiles = [
        config.tsOutputPath +'/**/*.js' 
];

  // delete the files
  del(typeScriptGenFiles, cb);
});
 
gulp.task('default', ['clean','lint','compile']);
