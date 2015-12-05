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
    spawn =  require('child_process').spawn,
    gulpparams = require('gulp-param')(require('gulp'), process.argv);

var config = new Config();
  
gulpparams.task('run', function(device) { 
    var child = spawn('tns', ['run', 'android'], {cwd: process.cwd()});
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
gulp.task('ts-lint', function () {
    return gulp.src(config.allTypeScript).pipe(tslint()).pipe(tslint.report('prose'));
});

/**
 * Compile TypeScript and include references to library and app .d.ts files.
 */
gulp.task('compile-ts', function () {
    var sourceTsFiles = [config.allTypeScript,                //path to typescript files
                         config.libraryTypeScriptDefinitions]; //reference to library .d.ts files
                        

    var tsResult = gulp.src(sourceTsFiles)
                     //  .pipe(sourcemaps.init())
                       .pipe(tsc(tsProject));

        tsResult.dts.pipe(gulp.dest(config.tsOutputPath));
        return tsResult.js
                        .pipe(sourcemaps.write('.'))
                        .pipe(gulp.dest(config.tsOutputPath));
});

gulp.task('compile-Components', function () {
    var sourceTsFiles = [config.allTypeScriptComponents,                //path to typescript files
                         config.libraryTypeScriptDefinitions]; //reference to library .d.ts files
                         
    var tsResult = gulp.src(sourceTsFiles)
                     //  .pipe(sourcemaps.init())
                       .pipe(tsc(tsProject));

        tsResult.dts.pipe(gulp.dest(config.tsOutputPathComponents));
        return tsResult.js
                        .pipe(sourcemaps.write('.'))
                        .pipe(gulp.dest(config.tsOutputPathComponents));
});

gulp.task('compile-ViewModels', function () {
    var sourceTsFiles = [config.allTypeScriptViewModels,                //path to typescript files
                         config.libraryTypeScriptDefinitions]; //reference to library .d.ts files
                         
    var tsResult = gulp.src(sourceTsFiles)
                     //  .pipe(sourcemaps.init())
                       .pipe(tsc(tsProject));

        tsResult.dts.pipe(gulp.dest(config.tsOutputPathViewModels));
        return tsResult.js
                        .pipe(sourcemaps.write('.'))
                        .pipe(gulp.dest(config.tsOutputPathViewModels));
});

/**
 * Remove all generated JavaScript files from TypeScript compilation.
 */
gulp.task('clean', function (cb) {
  var typeScriptGenFiles = [
                              config.tsOutputPath +'/**/*.js',    // path to all JS files auto gen'd by editor
                              config.tsOutputPathComponents +'/**/*.js',
                              config.tsOutputPathViewModels +'/**/*.js',
                              '!' + config.tsOutputPath + '/lib'
                           ];

  // delete the files
  del(typeScriptGenFiles, cb);
});

gulp.task('watch', function() {
    gulp.watch([config.allTypeScript], ['ts-lint', 'compile-ViewModels', 'compile-Components', 'compile-ts']);
});
 
gulp.task('default', ['ts-lint', 'compile-ViewModels', 'compile-Components', 'compile-ts','run']);
