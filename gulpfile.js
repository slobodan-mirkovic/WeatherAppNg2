var gulp = require('gulp');


var srcJs =  [
        'node_modules/core-js/client/shim.min.js',
        'node_modules/zone.js/dist/zone.js',
        'node_modules/reflect-metadata/Reflect.js',
        'node_modules/systemjs/dist/system.src.js'
    ];

var destJs = 'js/';


gulp.task('js', function () {      
    return gulp.src(srcJs)
        .pipe(gulp.dest(destJs));
});





gulp.task('default', ['js']);