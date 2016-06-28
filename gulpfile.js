var gulp     = require('gulp')
  , ts       = require('gulp-typescript')
  , project  = ts.createProject('tsconfig.json')
  , uglify   = require('gulp-uglify')
  , rename   = require('gulp-rename')
  , src      = __dirname + '/src'
  , dist     = __dirname + '/dist'
  , docs     = __dirname + '/docs';

gulp.task('build' , function ( ) {
  return project.src()
                .pipe(ts(project))
                .js
                .pipe(gulp.dest(dist))
                .pipe(gulp.dest(docs + '/assets/js/vendor'))
                .pipe(uglify())
                .pipe(rename({ suffix: '.min' }))
                .pipe(gulp.dest(dist));
});

gulp.task('default', ['build']);