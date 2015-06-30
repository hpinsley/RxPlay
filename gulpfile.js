var gulp = require('gulp');
var config = require('./gulp.config')();
var args = require('yargs').argv;
var del = require('del');
var path = require('path');
var $ = require('gulp-load-plugins')({lazy: true});

gulp.task('compile', function() {
   
    var files = config.typescriptFiles;

    var options = {
        "typescript": require('typescript'),    //to use 1.5-beta
        "emitDecoratorMetadata": true,
        "sourceMap": true,
        "module": "commonjs",
        "target": "es5"
    };
   
    var tsResult = gulp.src(files, {base: './'})
        .pipe($.print())
        .pipe($.typescript(options));
        
    return tsResult.js
        .pipe(gulp.dest('.'));
});

gulp.task('build', ['compile'], function() {
    
});

gulp.task('watch-code', function() {
    gulp.watch(config.typescriptFiles, ['build']);    
});

//gulp.task('help', $.taskListing);

function log(msg) {
    if (typeof(msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                $.util.log($.util.colors.red(item) + ': ' + $.util.colors.blue(msg[item]));
            }
        }
    }
    else {
        $.util.log($.util.colors.blue(msg));
    }
}
