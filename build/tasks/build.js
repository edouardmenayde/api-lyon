var gulp        = require('gulp');
var babel       = require('gulp-babel');

var options = {
  filename: '',
  filenameRelative: '',
  sourceMap: true,
  sourceRoot: '',
  moduleIds: false,
  comments: false,
  compact: false,
  code: true,
  presets: [ 'es2015-loose', 'stage-1'],
  plugins: [
    'syntax-flow',
    'transform-decorators-legacy',
    'transform-flow-strip-types',
    'add-module-exports'
  ]
};

gulp.task('build', function () {
  return gulp.src('src/**/**/*.js')
    .pipe(babel(options))
    .pipe(gulp.dest('dist'));
});
